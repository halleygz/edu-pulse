import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Review from './Review/Review'
import Footer from './Footer/Footer'
import KnowledgeTest from './TestYour/TestYour'
import Courses from './Courses/Courses'
import PremiumCourses from './Premium/Premium'
import Topics from './Topics/Topics'
/* import Quiz from './Quiz/Quiz' */



const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Review/>
        <KnowledgeTest/>
        <Courses/>
        <PremiumCourses/>
        <Topics/>
        {/* <Quiz/> */}
        <Footer/>
        
    </div>
)
}

export default Home