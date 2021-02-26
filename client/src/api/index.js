import axios from "axios";

const api = {
  login(email, password) {
    return axios
      .post("/api/login", { email, password })
      .then(({ data }) => data);
  },
  logout() {
    return axios.get("/api/logout").then(({ data }) => data);
  },
  getInventory() {
    return axios.get("/api/inventory");
  },
  addItemSubmit(formObject) {
    return axios.post("/api/inventory", formObject).then(({ data }) => data);
  },
  getStorefront(storeId) {
    return axios.get(`/api/storefront/${storeId}`).then(({ data }) => data);
  },
  deleteItem(id) {
    return axios.delete(`/api/inventory/${id}`).then(({ data }) => data);
  },
  getItem(id) {
    return axios
      .get(`/api/inventory/${id}`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => console.log("API error: ", err));
  },
  editItem(id, formObject) {
    return axios
      .put(`/api/inventory/${id}`, formObject)
      .then(({ data }) => data)
      .catch((err) => console.log("API error: ", err));
  },
};

export default api;
