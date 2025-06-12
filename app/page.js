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
import Girl from './_componantes/Girl';

const Page = () => {
  return (
    <div className="bg-black text-white w-full">
      {/* Padded content wrapper */}
      <div className="px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[100px]">
        <div className="py-4">
          <Navbar />
        </div>

        <div className="pt-4">
          <HeroSlider />
        </div>

        <div className="mt-[100px]">
          <Aboutsec />
        </div>

        <div className="mt-[100px]">
          <CourseCategories />
        </div>

        <div className="mt-[100px]">
          <StudentPlacement />
        </div>

        <div className="mt-[100px]">
          <AllCourses />
        </div>
      </div>

      {/* ❗ Videopic full width (outside padding) */}
      <div className="mt-[100px]">
        <Videopic />
      </div>

      {/* Back to padded content */}
      <div className="px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[100px]">
        <div className="mt-[100px]">
          <Collaboration />
        </div>
      </div>

      {/* ❗ Girl section full width */}
      <Girl />

      {/* Back to padded content */}
      <div className="px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[100px]">
        <div className="mt-[100px]">
          <UpcomingEvents />
        </div>

        <div className="mt-[100px]">
          <TestimonialSection />
        </div>

        <div className="mt-[100px]">
          <FaqSection />
        </div>

        <div className="mt-[100px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
