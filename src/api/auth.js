import instance from "./axiosCustomize";

const authApi = {
  register(data) {
    const url = "api/v1/user/register";
    return instance.post(url, data);
  },
};

export default authApi;
