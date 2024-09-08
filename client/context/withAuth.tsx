'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Note: Changed from "next/router"
import { useAuth } from "./AuthContext";

export default function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
    const WithAuthComponent: React.FC<P> = (props) => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();
        const [isChecking, setIsChecking] = useState(true);

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/Login');
            } else {
                setIsChecking(false);
            }
        }, [isAuthenticated, router]);

        if (isChecking) {
            return null; // Or a loading spinner
        }

        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };

    return Object.assign(WithAuthComponent, WrappedComponent);
}