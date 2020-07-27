import { useTheme, useMediaQuery } from '@material-ui/core';

function useMediaInfo() {
  const uMQ = useMediaQuery;
  const result = {};
  const keys = ['sm', 'md', 'lx', 'xl'];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result[`is${key.toUpperCase()}`] = {
      up: uMQ((theme) => theme.breakpoints.up(key)),
      down: uMQ((theme) => theme.breakpoints.down(key)),
    };
  }
  console.log(result);
  return result;
}

export default useMediaInfo;
