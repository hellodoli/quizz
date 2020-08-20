import { makeStyles } from '@material-ui/core';

const searchBox = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: '1.5rem',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '44px',
    borderRadius: '8px',
    background: theme.palette.background.paper,
    cursor: 'pointer',
    overflow: 'hidden',
    zIndex: 2,
    '&:hover': {
      background: theme.palette.action.selected,
    },
  },
  inner: {
    padding: '0 1rem',
  },
  inputWrapp: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '.5rem',
  },
  input: {
    color: theme.palette.text.primary,
    width: '100%',
    minWidth: 0,
    margin: 0,
    padding: 0,
    background: 'none',
    border: 'none',
    outline: 'none',
  },
}));

const searchBoxResult = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    top: '100%',
    left: 0,
    right: 0,
    padding: '1rem 0',
    background: theme.palette.background.default,
    zIndex: 2,
  },
  item: {
    background: theme.palette.background.paper,
    '&:hover': {
      background: theme.palette.background.default,
    },
  },
}));

export { searchBox, searchBoxResult };
