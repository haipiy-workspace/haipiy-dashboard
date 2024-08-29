import Cookies from "js-cookie";

const setToken = (item: string, expires: number | Date) => {
  Cookies.set("haipiy_token", item, { expires });
};

const getToken = () => Cookies.get("haipiy_token") || "";

const removeToken = () => {
  Cookies.remove("haipiy_token");
};

export default {
  setToken,
  getToken,
  removeToken,
};
