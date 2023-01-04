import axios from "axios";
import constants from "../utils/constants";

const axiosInstance = axios.create({
  baseURL: constants.baseUrl,
});

export default axiosInstance;
