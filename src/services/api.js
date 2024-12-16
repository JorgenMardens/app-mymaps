import axios from "axios";
/// https://bolls.life/get-chapter/NVIPT/22/8/


const api = axios.create({
  baseURL: 'https://bolls.life/'
});

export default api;