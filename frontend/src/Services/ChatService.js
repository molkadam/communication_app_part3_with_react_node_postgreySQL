import axios from "axios";
import Cookies from "js-cookie";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
let token = Cookies.get("token");

const addMessage = async (chatData) => {
  token = Cookies.get("token");
  const response = await axios.post(`${API_ENDPOINT}/chats`, chatData, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

const getMessages = async () => {
  token = Cookies.get("token");
  const response = await axios.get(`${API_ENDPOINT}/chats`, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export { addMessage, getMessages };
