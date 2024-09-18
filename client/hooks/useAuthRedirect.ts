    'use client'

    import {useEffect} from 'react'
    import {useRouter} from 'next/navigation'
    import {useAuth} from '../context/AuthContext'

    export default function useAuthRedirect() {
        const {authUser} = useAuth()
        const router = useRouter()

        useEffect(() => {
            console.log(authUser)
            if (!authUser) {
                router.push('/')
            }
        }, [authUser, router])

        return authUser
    }