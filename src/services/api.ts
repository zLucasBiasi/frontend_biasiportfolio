import axios from "axios";

export const getApiData = axios.create({
    baseURL: "https://backend-portfolio-m89s.onrender.com/",
});
