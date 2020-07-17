import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { staticImgPath } from '../../config/api';

const lazyImageClass = makeStyles(() => ({
  root: {
    display: 'block',
    opacity: ({ loaded }) => (loaded ? '1' : '0'),
    width: '100%',
    transition: 'opacity 0.1s ease-in-out',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
  },
}));

const elementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

function LazyImage(props) {
  const { image: src, keepRatio, width, placeholder } = props;

  const [loaded, setLoaded] = useState(false);
  const classes = lazyImageClass({ loaded });
  const ref = useRef();

  const handleScroll = useCallback(() => {
    const ele = ref.current;
    if (!loaded && elementInViewport(ele)) {
      // Load real image
      const imgLoaded = new Image();
      imgLoaded.src = src;
      imgLoaded.onload = () => {
        const ratio = imgLoaded.width / imgLoaded.height;
        ele.setAttribute('src', src);

        if (keepRatio) {
          ele.setAttribute('height', width / ratio);
        }
        ele.classList.add('loaded');
      };

      setLoaded(true);
    }
  }, [src, keepRatio, loaded, width]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img ref={ref} src={placeholder} className={classes.root} {...props} />
  );
}

LazyImage.defaultProps = {
  placeholder: `${staticImgPath}/placeholder.png`,
  width: '100%',
  height: '100%',
};

LazyImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default LazyImage;
