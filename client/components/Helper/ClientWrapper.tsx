"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter and usePathname
import LoadingSpinner from "./LoadingSpinner";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false); // Set initial loading state to false
  const router = useRouter();
  const pathname = usePathname(); // Get current path to detect route changes

  useEffect(() => {
    // Whenever pathname changes, trigger loading state
    setLoading(true);

    // Simulate a delay for demonstration (e.g., fetching data, etc.)
    const timer = setTimeout(() => setLoading(false), 500); // Adjust the timeout as needed

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [pathname]); // Dependency on pathname for route change detection

  return <>{loading ? <LoadingSpinner /> : children}</>; // Conditionally render loading spinner or children
};

export default ClientWrapper;
