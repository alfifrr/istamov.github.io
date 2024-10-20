"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
// import { useAuth } from "@/contexts/authContext";
import { withAuth } from "@/hoc/pageControl";

interface User {
  username: string;
  password: string;
  sessionId: string | null;
}

const Approved: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!searchParams) return;

    const requestToken = searchParams.get("request_token");
    const approved = searchParams.get("approved");
    const username = searchParams.get("username");

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
          const localStorageUserDb = localStorage.getItem("userdb");
          let userDb: User[] = localStorageUserDb
            ? JSON.parse(localStorageUserDb)
            : [];

          const userIsFound = userDb.find((user) => username === user.username);
          if (userIsFound) {
            userIsFound.sessionId = getSessionToken.data.session_id;

            localStorage.setItem("user", JSON.stringify(userIsFound));
            localStorage.setItem("userdb", JSON.stringify(userDb));
            console.log("Session created:", getSessionToken.data);
          } else {
            console.error("User not found in local storage.");
            setMessage("User not found in local storage.");
          }
          setMessage("Request has been approved, redirecting to the page.");
          router.push("/");
        } catch (error) {
          console.error("Error creating session:", error);
          // setMessage("Error creating session. Please try again.");
        }
      };

      createSession();
    }
  }, [searchParams, router]);

  // useEffect(() => {
  //   const requestToken = searchParams && searchParams.get("request_token");
  //   const approved = searchParams && searchParams.get("approved");
  //   const username = searchParams && searchParams.get("username");

  //   if (approved === "true" && requestToken) {
  //     const createSession = async () => {
  //       try {
  //         const getSessionToken = await api.post(
  //           "/3/authentication/session/new",
  //           {
  //             request_token: requestToken,
  //           }
  //         );

  //         // save the session id to local storage
  //         const localStorageUserDb = localStorage.getItem("userdb");
  //         let userDb: User[] = localStorageUserDb
  //           ? JSON.parse(localStorageUserDb)
  //           : [];

  //         const userIsFound = userDb.find((user) => username === user.username);
  //         if (userIsFound) {
  //           userIsFound.sessionId = getSessionToken.data.session_id;

  //           localStorage.setItem("user", JSON.stringify(userIsFound));
  //           localStorage.setItem("userdb", JSON.stringify(userDb));
  //           console.log("Session created:", getSessionToken.data);
  //         } else {
  //           console.error("User not found in local storage.");
  //           setMessage("User not found in local storage.");
  //         }
  //         setMessage("Request has been approved, redirecting to the page.");
  //         router.push("/");
  //       } catch (error) {
  //         console.error("Error creating session:", error);
  //       }
  //     };

  //     createSession();
  //   }
  // }, [searchParams, router]);

  return (
    <div className="h-screen flex items-center justify-center text-black dark:text-white">
      <div>{message}</div>
      <Link href="/">Back to dashboard.</Link>
    </div>
  );
};

export default withAuth(Approved);
