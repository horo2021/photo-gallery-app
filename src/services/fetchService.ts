// this service was created to handle the fetch request from the api
import axios from "axios";
export const fetchImages = async () => {
  const apiRoot = "https://api.unsplash.com";
  const accessKey = process.env.REACT_APP_ACCESSKEY;

  const response = await axios.get(
    `${apiRoot}/photos/random?client_id=${accessKey}&count=10`
  );
  return response.data;
};
