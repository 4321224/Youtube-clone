import Api from "./Api";

export default {
  signIn(credentials) {
    return Api().post("auth/login", credentials);
  },
  signUp(data) {
    return Api().post("auth/register", data);
  },
  updateUserDetails(data) {
    return Api().put("auth/updatedetails", data);
  },
  uploadUserPhoto(data) {
    return Api().put("auth.photo", data);
  },
  updatePassword(data) {
    return Api().put("auth/updatepassword", data);
  },
  me(token) {
    return Api().post("auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
