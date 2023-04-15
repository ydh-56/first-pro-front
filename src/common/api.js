import axios from "axios";

const axiosPost = async (url, postData) => {
  const res = await axios.post(process.env.REACT_APP_API_URL + url, postData);
};
