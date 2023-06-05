import instance from "./axiosCustomize";

const authApi = {
  register(fullName, email, password, phone) {
    const url = "api/v1/user/register";
    return instance.post(url, { fullName, email, password, phone });
  },

  login(username, password) {
    const url = "/api/v1/auth/login";
    return instance.post(url, { username, password });
  },
};

export default authApi;
