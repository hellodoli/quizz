import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => {
  return {
    root: {
      '& .MuiSvgIcon-root': {
        // fontSize: '1rem',
      },
    },
  };
});

export { useStyle };
