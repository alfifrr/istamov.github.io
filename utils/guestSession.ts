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
    interface GuestSessionResponse {
      success: boolean;
      guest_session_id: string;
      expires_at: string;
    }

    const response = await axios.request<GuestSessionResponse>(options);

    if (!response.data || !response.data.success) {
      console.error(
        "Failed to fetch guest session ID: Empty or unsuccessful response"
      );
      return null;
    }

    return {
      guestSessionId: response.data.guest_session_id,
      expiresAt: response.data.expires_at,
    };
  } catch (error) {
    console.error("Error fetching guest session ID:", error);
    return null;
  }
};

export default fetchGuestSessionId;
