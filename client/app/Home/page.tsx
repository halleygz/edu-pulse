'use client'
import Courses from '@/components/Home/Courses/Courses'
import PremiumCourses from '@/components/Home/Premium/Premium'
import KnowledgeTest from '@/components/Home/TestYour/TestYour'
import useAuthRedirect from '@/hooks/useAuthRedirect'
import React from 'react'

const Home = () => {
  const isAuthenticated = useAuthRedirect()
  if(!isAuthenticated) {
    return <>Please Login</>
  }
  return (
    <div>
        <KnowledgeTest/>
        <Courses/>
        <PremiumCourses/>
    </div>
  )
}

export default Home