/**
 *
 * @param {Object} inputOb
 * @param {Array} rootKeys
 */
export const checkValidKeyObject = (inputOb, rootKeys) => {
  const ob = Object.keys({ ...inputOb });
  const isValid = ob.every((pre) => rootKeys.includes(pre));
  if (isValid && ob.length === rootKeys.length) return true;
  return false;
};
