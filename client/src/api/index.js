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
  addItemSubmit(formObject) {
    return axios
      .post("/api/inventory", formObject)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log("API error: ", err));
  },
};

export default api;
