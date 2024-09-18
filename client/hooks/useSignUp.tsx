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

const useSignUp = (): [
  UseAuthResult,
  (full_name: string, phone_number:string, username:string,email: string, password: string) => Promise<void>
] => {
  const { setAuthUser, setIsAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const signUp = async (full_name: string, phone_number:string, username:string,email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const body = {
        full_name, 
        phone_number,
        username,
        email,
        password
      }
      const response = await axios.post(`${config.apiUrl}/api/auth/signup`, body, {
        withCredentials: true,
      });

      if (!response) {
        throw new Error("An error occurred. Please try again.");
      }

      const data = response.data;
      // if (!response.ok) {
      //   throw new Error(data.error || "An error occurred. Please try again.");
      // }

      localStorage.setItem("app-user", JSON.stringify(data));
      toast.success("Successfully signed up!");
      router.push("/Courses");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return [{ isLoading, error }, signUp];
};

export default useSignUp;
