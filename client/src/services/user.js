import api from "configs/api";

export const getProfile = async () => {
  const { data } = await api.get("user/whoami");
  return data;
};
