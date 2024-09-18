"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; 
import LoadingSpinner from "./LoadingSpinner";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false); 
  const router = useRouter();
  // usePathname retrieves the current path of the URL
  const pathname = usePathname(); 
  useEffect(() => {
  
    setLoading(true);

    // Simulate a delay for demonstration (e.g., fetching data, etc.)
    const timer = setTimeout(() => setLoading(false), 500);   

    // executed when the component unmounts or before the effect runs again (e.g., on a new route change).
    return () => clearTimeout(timer);
  }, [pathname]); // Dependency on pathname for route change detection

  return <>{loading ? <LoadingSpinner /> : children}</>; 
};

export default ClientWrapper;
