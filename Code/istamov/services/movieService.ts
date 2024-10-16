import api from "../lib/axios";

const fetchNextRequest = async () => {
  api
    .get("/api/authentication")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching authentication:", error);
      return null;
    });
};

export default fetchNextRequest;
