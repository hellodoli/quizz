import { makeStyles } from '@material-ui/core';

const modalLoading = makeStyles((theme) => {
  const container = (isFullScreen) => {
    if (isFullScreen) return {};
    return {
      position: 'relative',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    };
  };
  return {
    root: ({ isFullScreen }) => ({
      ...container(isFullScreen),
    }),
  };
});

export { modalLoading };
