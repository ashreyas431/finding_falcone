import axios from "axios";
export default function apiHandler(url: string, method: string, postObj?: {}) {
  const axiosInstance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  if (postObj !== undefined) {
    return axiosInstance({
      method: method,
      url: url,
      data: postObj
    });
  } else
    return axiosInstance({
      method: method,
      url: url
    });
}
