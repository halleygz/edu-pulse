// components/ClientWrapper.tsx

"use client";

import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2-second loading time

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <LoadingSpinner /> : children}</>; // Conditionally render loading spinner or children
};

export default ClientWrapper;
