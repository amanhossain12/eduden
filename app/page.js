import React from 'react'
import Home from './_componantes/Navbar'
import Navbar from './_componantes/Navbar'
import HeroSlider from './_componantes/HeroSlider'
import AboutUs from './_componantes/Aboutsec'
import CourseCategories from './_componantes/CourseCategories'
import Aboutsec from './_componantes/Aboutsec'
import StudentPlacement from './_componantes/StudentPlacement'
import AllCourses from './_componantes/allcourse'
import Collaboration from './_componantes/Collaboration'
import Videopic from './_componantes/Videopic'
import UpcomingEvents from './_componantes/Upcoming'
import TestimonialSection from './_componantes/TestimonialSection'
import FaqSection from './_componantes/FaqSection'
import Footer from './_componantes/footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <Aboutsec/>
      <CourseCategories/>
      <StudentPlacement/>
      <AllCourses/>
      <Videopic/>
      <Collaboration/>
      <UpcomingEvents/>
      <TestimonialSection/>
      <FaqSection/>
      <Footer/>
    </div>
  )
}

export default page
