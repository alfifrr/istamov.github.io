"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import api from "@/lib/axios";

const Approved: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const requestToken = searchParams && searchParams.get("request_token");
    const approved = searchParams && searchParams.get("approved");

    if (approved === "true" && requestToken) {
      const createSession = async () => {
        try {
          const getSessionToken = await api.post(
            "/3/authentication/session/new",
            {
              request_token: requestToken,
            }
          );

          // save the session id to local storage
          localStorage.setItem("sessionId", getSessionToken.data.session_id);

          console.log("Session created:", getSessionToken.data);
          router.push("/");
        } catch (error) {
          console.error("Error creating session:", error);
          setError("Failed to create session. Please try again.");
        }
      };

      createSession();
    } else {
      setError("The request is missing or revoked.");
    }
  }, [searchParams, router]);

  return (
    <>
      <div>Your request has been approved.</div>
      {/* {error && <div className="text-red-500">{error}</div>} */}
      <Link href="/">Back to dashboard.</Link>
    </>
  );
};

export default Approved;
