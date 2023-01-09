import axios from "axios";

export const getApiData = axios.create({
    baseURL: "http://localhost:5000",
});
