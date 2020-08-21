import axios from "axios";

const API = axios.create({
    baseURL: "https://front-end-wizard-api.herokuapp.com",
});

export default API;
