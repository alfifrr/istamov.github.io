import api from "../lib/axios";

const fetchNextRequest = async () => {
  api
    .get("/api/authentication")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    })
    .catch(() => null);
};

export default fetchNextRequest;
