import axios from "axios";

const axiosPost = async (url, postData) => {
  return await axios.post(process.env.REACT_APP_API_URL + url, postData).then((res) => res);
};

export default axiosPost;
