import axios from 'axios'
import { useState } from 'react'
import {config} from '@/config/config'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { axiosInstance } from '@/config/axiosInstnace'

interface useTakeAssesmentResult {
    isLoading: boolean;
    error: string | null;
}

const useTakeAssesment = (): [
    useTakeAssesmentResult,
    (topic: string) => Promise<void>
] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const takeAssesment = async (topic: string) => {
        setIsLoading(true);
        setError(null);
        const arrayToBeSent = [topic]
        try {
            const body = {
                topics: arrayToBeSent
            }
            console.log("requesting....")
            const response = await axiosInstance.post(`/api/assessment/create`, body);

            if (!response) {
                throw new Error('An error occurred. Please try again.');
            }

            const data = response.data;

            localStorage.setItem("user-plans", JSON.stringify(data.allUserPlans.plans));

            toast.success('Successfully started assesment!');
            router.push('/Plans');
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'An error occurred. Please try again.'
            );
        } finally {
            setIsLoading(false);
        }
    }

    return [ {isLoading, error}, takeAssesment];
}

export default useTakeAssesment