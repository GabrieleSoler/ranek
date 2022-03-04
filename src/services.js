import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
  //isso faz com que eu nao precise escrever sempre a url, só botar /produto, etc
})

export const api = {
  get(endpoint) {
    //end point=url
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  }
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}
