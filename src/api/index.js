import axios from "axios";
import { ayuUrls } from "./ayuApis";

export const ayuApi = async (url, method, body, config) => {
  let complete_url = ayuUrls.baseUrl + url;
  switch (method) {
    case "GET":
      try {
        let response = await axios.get(complete_url);
        return response;
      } catch (error) {
        alert(error);
      }
      break;

    case "POST":
      try {
        let response = await axios.post(complete_url, body, config);
        return response;
      } catch (error) {
        alert(error);
      }
      break;

    default:
      alert("in default");
      break;
  }
};
