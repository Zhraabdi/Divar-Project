import api from "configs/api";

export const getProfile = async () => {
  try {
    const { data } = await api.get("user/whoami");
    return data ?? null;
    
  } catch (error) {
    return null;
    
  }


};
