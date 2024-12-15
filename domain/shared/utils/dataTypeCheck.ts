export const isJson = (data: any): boolean => {
  let ret = true;
  try {
    JSON.parse(data);
  } catch (e) {
    ret = false;
  }
  return ret;
};

export default {
  isJson,
};
