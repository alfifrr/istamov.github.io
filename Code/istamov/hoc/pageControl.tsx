import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export const withAuth = (WrappedContent: React.ComponentType) => {
  const AuthComponent: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        router.push("/login");
      }
    }, [router]);

    return <WrappedContent {...props} />;
  };
  return AuthComponent;
};

export const withoutAuth = (WrappedContent: React.ComponentType) => {
  const AuthComponent: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        router.push("/");
      }
    }, [router]);

    return <WrappedContent {...props} />;
  };
  return AuthComponent;
};
