export const checkValidKeyObject = (inputOb, rootKeys) => {
  const ob = Object.keys({ ...inputOb });
  const isValid = ob.every((pre) => rootKeys.includes(pre));
  if (isValid) return true;
  return false;
};
