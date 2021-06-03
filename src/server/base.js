import axios from "axios";

// BASE_URL
axios.defaults.baseURL = "http://localhost:8080/api";
// axios.defaults.baseURL =
//   "https://cors-anywhere.herokuapp.com/http://www.donates.algalya.com/api";

// HEADERS
// axios.defaults.headers.common["Accept-Language"] = "ar";

// INTERCEPTORS
// axios.interceptors.response.use(
//   (response) => {
//     response.time = new Date();
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 403) {
//       return Promise.reject((error.response.fail = "some error 😂"));
//     }

//     return Promise.reject(error);
//   }
// );
