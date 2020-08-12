import React, { useRef, useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const checkRatio = (ratio) => {
  switch (ratio) {
    case '1x1':
      return '100%';
    case '16x9':
      return '56.25%';
    default:
      return ratio;
  }
};

const lazyImageClass = makeStyles(() => ({
  wrapp: {
    position: 'relative',
    width: '100%',
    paddingTop: ({ ratio }) => checkRatio(ratio),
  },
  positionImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  skeletonLoading: {
    opacity: 1,
  },
  img: {
    display: 'block',
    width: '100%',
    transition: 'transform .4s ease-out, opacity 0.1s ease-in-out',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: ({ loaded }) => (loaded ? '1' : '0'),
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
  const {
    image: src,
    ratio,
    width,
    height,
    placeholder,
    alt,
    title,
    isLazy,
    ...other // className or something else
  } = props;

  const [loaded, setLoaded] = useState(!isLazy);
  const classes = lazyImageClass({ loaded, ratio });
  const imgClasses = clsx(classes.positionImg, classes.img, { loaded });
  const ref = useRef();

  const handleScroll = useCallback(() => {
    const ele = ref.current;
    if (!loaded && elementInViewport(ele)) {
      // Load real image
      const imgLoaded = new Image();
      imgLoaded.src = src;
      imgLoaded.onload = () => {
        ele.src = src;
        ele.alt = alt;
        ele.title = title;
        // ele.setAttribute('width', width);
        // ele.setAttribute('height', height);
        ele.classList.add('loaded');
      };
      setLoaded(true);
    }
  }, [alt, loaded, src, title]);

  useEffect(() => {
    if (isLazy) {
      setTimeout(handleScroll);
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (isLazy) window.removeEventListener('scroll', handleScroll);
    };
  }, [alt, handleScroll, height, isLazy, loaded, src, title, width]);

  return (
    <div className={classes.wrapp}>
      {!loaded && (
        <Skeleton
          className={clsx(classes.positionImg, classes.skeletonLoading)}
          variant="rect"
          animation="wave"
          width="100%"
          height="100%"
        />
      )}
      <img
        className={imgClasses}
        ref={ref}
        src={isLazy ? placeholder : src}
        alt={isLazy ? '' : alt}
        title={isLazy ? '' : title}
        width={width}
        height={height}
        {...other}
      />
    </div>
  );
}

LazyImage.defaultProps = {
  title: '',
  placeholder: null,
  width: '100%',
  height: '100%',
  ratio: '16x9',
  isLazy: true,
};

LazyImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ratio: PropTypes.string,
  isLazy: PropTypes.bool,
};

export default LazyImage;
