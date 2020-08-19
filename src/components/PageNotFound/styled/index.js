import { makeStyles } from '@material-ui/core';

export const pageNotFound = makeStyles((theme) => ({
  imgWrapp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    width: ({ imgWidth }) => imgWidth && imgWidth,
    height: 'auto',
  },
  btnWrapp: {
    marginTop: '1rem',
    textAlign: 'center',
  },
}));
