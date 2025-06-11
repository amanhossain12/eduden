'use client';

import Navbar from './_componantes/Navbar';
import HeroSlider from './_componantes/HeroSlider';
import Aboutsec from './_componantes/Aboutsec';
import CourseCategories from './_componantes/CourseCategories';
import StudentPlacement from './_componantes/StudentPlacement';
import AllCourses from './_componantes/allcourse';
import Videopic from './_componantes/Videopic';
import Collaboration from './_componantes/Collaboration';
import UpcomingEvents from './_componantes/Upcoming';
import TestimonialSection from './_componantes/TestimonialSection';
import FaqSection from './_componantes/FaqSection';
import Footer from './_componantes/footer';

const Page = () => {
  return (
    <div className="bg-black text-white w-full">
      {/* ✅ Unified container with proper padding and max width */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        
        {/* Navbar */}
        <div className="py-4">
          <Navbar />
        </div>

        {/* Hero Slider */}
        <div className="pt-4 ">
          <HeroSlider />
        </div>

        {/* About Section with top gap */}
        <div className="mt-[150px] ">
          <Aboutsec />
        </div>

        {/* Other sections, each spaced 150px from previous */}
        <div className="mt-[150px]">
          <CourseCategories />
        </div>

        <div className="mt-[150px]">
          <StudentPlacement />
        </div>

        <div className="mt-[150px]">
          <AllCourses />
        </div>

        <div className="mt-[150px]">
          <Videopic />
        </div>

        <div className="mt-[150px]">
          <Collaboration />
        </div>

        <div className="mt-[150px]">
          <UpcomingEvents />
        </div>

        <div className="mt-[150px]">
          <TestimonialSection />
        </div>

        <div className="mt-[150px]">
          <FaqSection />
        </div>

        {/* Footer with top gap */}
        <div className="mt-[150px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
