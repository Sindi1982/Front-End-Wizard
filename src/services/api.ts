import axios from "axios";

const API = axios.create({
    baseURL: "https://front-end-wizard-api.herokuapp.com",
    // TODO: Make the above go of env vars
});

export default API;
