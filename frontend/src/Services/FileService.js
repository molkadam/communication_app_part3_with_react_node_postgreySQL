import axios from "axios";
import Cookies from "js-cookie";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
let token = Cookies.get("token");

const fileUpload = async (filesDetail) => {
  token = Cookies.get("token");
  const response = await axios.post(`${API_ENDPOINT}/uploads`, filesDetail, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

const getFiles = async () => {
  token = Cookies.get("token");
  const response = await axios.get(`${API_ENDPOINT}/uploads`, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

const updateFile = async (id, uploadData) => {
  token = Cookies.get("token");
  const response = await axios.put(
    `${API_ENDPOINT}/uploads/${id}`,
    uploadData,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

const deleteFile = async (id) => {
  const response = await axios.delete(`${API_ENDPOINT}/uploads/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};
export { fileUpload, getFiles, updateFile, deleteFile };
