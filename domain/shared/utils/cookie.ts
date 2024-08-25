import Cookies from "js-cookie";

const setToken = (item: string) => {
  Cookies.set("haipiy_token", item, { expires: 7 });
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
