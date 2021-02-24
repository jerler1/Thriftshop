import axios from "axios";

const api = {
  login(email, password) {
    return axios
      .post("/api/login", { email, password })
      .then(({ data }) => data)
      .catch((err) => console.log("API error: ", err));
  },
  logout() {
    return axios.get("/api/logout")
      .then(({ data }) => data)
      .catch((err) => console.log("API ERROR: ", err));
  }
};

export default api;
