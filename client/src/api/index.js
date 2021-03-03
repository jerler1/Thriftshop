import axios from "axios";

const api = {
  login(email, password) {
    return axios
      .post("/api/auth/login", { email, password })
      .then(({ data }) => data);
  },
  logout() {
    return axios.get("/api/auth/logout").then(({ data }) => data);
  },
  getInventory({ latest = false, limit = 0 } = {}) {
    if (latest) {
      return axios.get(`/api/inventory/latest?limit=${limit ? limit : ""}`);
    }
    return axios.get(`/api/inventory?limit=${limit ? limit : ""}`);
  },
  getAvailInventory() {
    return axios.get("/api/inventory/available");
  },
  getSubCategory(category) {
    return axios.get(`/api/inventory/cat/${category}`);
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
  getCheckOutObject(id) {
    return axios
      .get(`/api/checkout/checkout-session?id=` + id)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log("API error: ", err);
      });
  },
  doSearch(query) {
    return axios.get(`/api/inventory/search?q=${query}`).then(({ data }) => data);
  },
};

export default api;
