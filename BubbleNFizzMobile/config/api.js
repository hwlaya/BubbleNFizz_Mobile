import axios from "axios";

export const DEV_URL = "http://192.168.1.20:8000/api/";
// export const PROD_URL = "";
export default api = axios.create({
  baseURL: DEV_URL,
});
