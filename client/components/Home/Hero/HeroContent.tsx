import React from 'react'

const HeroContent = () => {
  return (
    <div>
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>Achieve Your learning Goals with Ease.</h1>
        {/* Description */}
        <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>Join our community for personalized, engaging learning. Connect, grow, and succeed with tailored courses and supportive collaboration.</p>
        {/* Buttons */}
        <div className='mt-8 flex items-center space-x-4 '>
            <button className='button__cls bg-green-500 hover:bg-green-600'>Get Started</button>
            <button className='button__cls bg-yellow-700 hover:bg-yellow-900'>Learn More</button>
        </div>
        <div className="flex items-center flex-wrap space-x-16 mt-8">
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>260+</p>
                <p className='w-[100px] h-[3px] bg-green-600 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Quizes</p>
            </div>
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>1340+</p>
                <p className='w-[100px] h-[3px] bg-blue-600 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
            </div>
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>60+</p>
                <p className='w-[100px] h-[3px] bg-yellow-600 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
            </div>
        </div>
    </div>
  )
}

export default HeroContent