'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const HeroSlider = () => {
  return (
    <div className="relative w-full bg-black">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        className="rounded-xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative group w-full h-[60vh] md:h-[70vh] lg:h-[80vh] text-white overflow-hidden rounded-xl">
            <Image
              src="/1st.jpg"
              alt="Slide 1"
              fill
              className="object-cover brightness-[0.3] transition-transform duration-1000 ease-in-out group-hover:scale-95"
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 sm:px-10 md:px-20 lg:px-28 z-10">
              <div className="max-w-xl space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-sm bg-yellow-400 text-black font-semibold px-3 py-1 inline-block rounded">
                  WELCOME TO EDUDEN
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Where Learning <br />
                  Meets Imagination <br />
                  & Innovation!
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Your one-stop destination for unlocking potential and digital growth.
                </p>
                <Link href="#">
                  <span className="inline-block mt-4 bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-300 transition text-sm sm:text-base">
                    Discover More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative group w-full h-[60vh] md:h-[70vh] lg:h-[80vh] text-white overflow-hidden rounded-xl">
            <Image
              src="/1st.jpg"
              alt="Slide 2"
              fill
              className="object-cover brightness-[0.3] transition-transform duration-1000 ease-in-out group-hover:scale-95"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 sm:px-10 md:px-20 lg:px-28 z-10">
              <div className="max-w-xl space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-sm bg-yellow-400 text-black font-semibold px-3 py-1 inline-block rounded">
                  EXPLORE COURSES
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Learn from <br />
                  the Best Educators
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Dive into a rich curriculum built by industry experts.
                </p>
                <Link href="#">
                  <span className="inline-block mt-4 bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-300 transition text-sm sm:text-base">
                    Browse Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative group w-full h-[60vh] md:h-[70vh] lg:h-[80vh] text-white overflow-hidden rounded-xl">
            <Image
              src="/1st.jpg"
              alt="Slide 3"
              fill
              className="object-cover brightness-[0.3] transition-transform duration-1000 ease-in-out group-hover:scale-95"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 sm:px-10 md:px-20 lg:px-28 z-10">
              <div className="max-w-xl space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-sm bg-yellow-400 text-black font-semibold px-3 py-1 inline-block rounded">
                  START YOUR JOURNEY
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Future-Proof <br />
                  Your Career Today
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Upskill with top-tier content and stay ahead of the curve.
                </p>
                <Link href="#">
                  <span className="inline-block mt-4 bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-300 transition text-sm sm:text-base">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      
   
{/* Social Media Sidebar */}
<div className="absolute top-1/2 -translate-y-1/3 right-3 sm:right-4 md:right-6 z-30 group">
  <div className="bg-yellow-400 text-black flex flex-col items-center justify-between px-2 py-4 rounded-full space-y-5 h-64 sm:h-72 w-10 sm:w-12 shadow-lg transition-transform duration-300 group-hover:scale-105">
    {/* Rotated text - bottom to top */}
    <div className="transform rotate-90 text-[10px] sm:text-[11px] font-bold tracking-wider whitespace-nowrap">
      FOLLOW NOW →
    </div>

    {/* Social Icons */}
    <div className="flex flex-col items-center space-y-4 text-black text-sm">
      <Link href="#" aria-label="Facebook">
        <FaFacebookF className="hover:scale-110 transition-transform duration-200" />
      </Link>
      <Link href="#" aria-label="Instagram">
        <FaInstagram className="hover:scale-110 transition-transform duration-200" />
      </Link>
      <Link href="#" aria-label="YouTube">
        <FaYoutube className="hover:scale-110 transition-transform duration-200" />
      </Link>
      <Link href="#" aria-label="LinkedIn">
        <FaLinkedinIn className="hover:scale-110 transition-transform duration-200" />
      </Link>
    </div>
  </div>
</div>


    </div>
  );
};

export default HeroSlider;
