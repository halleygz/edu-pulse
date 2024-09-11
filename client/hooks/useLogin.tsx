'use client'
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { config } from "@/config/config";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

interface UseAuthResult {
    isLoading: boolean;
    error: string | null;
}

const useLogin = ():[
    UseAuthResult,
    (email: string, password: string) => Promise<void>
] => {
    const {setAuthUser,setIsAuthenticated} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const router = useRouter();

    const login = async (email: string, password: string) => {
        console.log(email, password)
        setIsLoading(true);
        setError(null);
        try {
            
            const body = {
                email,
                password,
            }
            const response = await axios.post(`${config.apiUrl}/api/auth/login`, body, {
                withCredentials: true,
            });
            // console.log("requesting server", response)

            if (!response) {
                throw new Error('An error occurred. Please try again.');
            }

            const data = response.data;
            console.log(data)
            // if (!response.ok) {
            //     throw new Error(data.error || 'An error occurred. Please try again.');
            // }

            setAuthUser(data.userId);
            localStorage.setItem('app-user', JSON.stringify(data));
            setIsAuthenticated(true)
            toast.success('Successfully logged in!');
            router.push('/Courses');
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'An error occurred. Please try again.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return [{isLoading, error}, login];
}

export default useLogin