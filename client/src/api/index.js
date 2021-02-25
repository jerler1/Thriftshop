import axios from "axios";

const api = {
  login(email, password) {
    return axios
      .post("/api/login", { email, password })
      .then(({ data }) => data)
      .catch((err) => console.log("API error: ", err));
  },
  logout() {
    return axios
      .get("/api/logout")
      .then(({ data }) => data)
      .catch((err) => console.log("API ERROR: ", err));
  },
  addItemSubmit({ name, category, price, condition, description }) {
    return axios
      .post("/api/inventory", { name, category, price, condition, description })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log("API error: ", err));
  },
};

export default api;
