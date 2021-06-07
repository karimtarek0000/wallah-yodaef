import axios from "axios";

//
let BASE_URL = null;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:8080/api";
} else {
  BASE_URL = "http://www.donates.algalya.com/api";
}

// BASE_URL
axios.defaults.baseURL = BASE_URL;

// GET TOKEN
const USER = JSON.parse(localStorage.getItem("tokenUser"));

// HEADERS
axios.defaults.headers.common["Accept-Language"] = "ar";
if (USER)
  axios.defaults.headers.common["Authorization"] = `Bearer ${USER.token}`;
