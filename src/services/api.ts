import axios from "axios";

export const api = axios.create({
  baseURL: "https://sugarpixapi.herokuapp.com/",
});
