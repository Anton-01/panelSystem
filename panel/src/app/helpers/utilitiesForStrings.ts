const validateIsEmpty = (v: any) => {
  let type = typeof v;
  if (type === 'undefined') {
    return true;
  }
  if (type === 'boolean') {
    return !v;
  }
  if (v === null) {
    return true;
  }
  if (v === undefined) {
    return true;
  }
  if (v instanceof Array) {
    if (v.length < 1) {
      return true;
    }
  } else if (type === 'string') {
    if (v.length < 1) {
      return true;
    }
    if (v === '0') {
      return true;
    }
  } else if (type === 'object') {
    if (Object.keys(v).length < 1) {
      return true;
    }
  } else if (type === 'number') {
    if (v === 0) {
      return true;
    }
  }
  return false;
}


export { validateIsEmpty };
