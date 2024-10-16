import api from "../lib/api";

const fetchAuthentication = async () => {
  api
    .get("/authentication")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching authentication:", error);
      return null;
    });
};

export default fetchAuthentication;
