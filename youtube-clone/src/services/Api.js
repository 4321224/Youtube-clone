import axios from "axios";

export default () => {
  const axiosIntance = axios.create({
    baseURL: `${process.env.VUE_APP_URL}/api/v1`,
  });
  const token = localStorage.getItem("token");
  if (token) {
    axiosIntance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  axiosIntance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        location.reload();
      }
      return Promise.reject(error);
    }
  );

  return axiosIntance;
};
