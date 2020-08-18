import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const autoFixedWrappStyle = makeStyles(() => {
  /* const getPosWrapp = ({ pos }) => ({
    position: 'fixed',
    top: pos.top || 0,
    left: pos.left || 0,
    maxWidth: '200px',
    overflow: 'hidden',
  }); */
  const getPosWrapp = ({ pos }) => ({
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    maxWidth: '200px',
    overflow: 'hidden',
  });
  return {
    root: (props) => getPosWrapp(props),
  };
});

function AutoFixedWrapp({
  containerRef,
  children,
  loadingComponent: LoadingComponent,
}) {
  const [pos, setPos] = useState({
    top: 10,
    left: 10,
  });
  const classes = autoFixedWrappStyle({ pos });

  useEffect(() => {
    const setPosition = () => {
      const container = containerRef.current;
      if (!container) setPos(null);
      const rect = container.getBoundingClientRect();
      if (rect) {
        const { top, left } = rect;
        setPos({ top, left });
      }
    };
    setPosition();
    window.addEventListener('resize', setPosition);
    return () => window.removeEventListener('resize', setPosition);
  }, [containerRef]);

  if (pos === null) return null;
  if (Object.values(pos).length === 0) return <div>...Loading</div>;
  return <div className={classes.root}>{children}</div>;
}

export default AutoFixedWrapp;
