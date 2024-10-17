import axios from "axios";

const fetchGuestSessionId = async (): Promise<{
  guestSessionId: string;
  expiresAt: string;
} | null> => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/authentication/guest_session/new",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  };

  try {
    const response = await axios.request(options);
    return {
      guestSessionId: response.data.guest_session_id,
      expiresAt: response.data.expires_at,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchGuestSessionId;
