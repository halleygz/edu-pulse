'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useAuth} from '../context/AuthContext'

export default function useAuthRedirect() {
    const {isAuthenticated} = useAuth()
    const router = useRouter()

    useEffect(() => {
        console.log(isAuthenticated)
        if (!isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated, router])

    return isAuthenticated
}