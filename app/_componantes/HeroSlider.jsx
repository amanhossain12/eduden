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
    <div className="relative bg-black">
      {/* ← → Custom Arrows at Bottom Left and Right */}
      <div className="absolute bottom-6 w-full px-6 flex justify-between items-center z-40">
        <button
          id="custom-prev"
          className="text-white text-2xl sm:text-3xl font-bold  bg-opacity-50 hover:bg-opacity-70 rounded-full px-4 py-2 transition"
        >
          ←
        </button>
        <button
          id="custom-next"
          className="text-white text-2xl sm:text-3xl font-bold  bg-opacity-50 hover:bg-opacity-70 rounded-full px-4 py-2 transition"
        >
          →
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          prevEl: '#custom-prev',
          nextEl: '#custom-next',
        }}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        className="swiper-with-bottom-nav"
      >
        {[1, 2, 3].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] 2xl:h-[95vh] text-white overflow-hidden group">
              {/* Image Hover Zoom Wrapper */}
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
                <Image
                  src="/1st.jpg"
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover brightness-[0.3]"
                  priority={index === 0}
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 z-10">
                <div className="max-w-xl md:max-w-2xl space-y-3 sm:space-y-5">
                  <p className="text-[10px] sm:text-xs md:text-sm 2xl:text-base bg-yellow-400 text-black font-semibold px-3 py-1 rounded inline-block">
                    {index === 0 && 'WELCOME TO EDUDEN'}
                    {index === 1 && 'EXPLORE COURSES'}
                    {index === 2 && 'START YOUR JOURNEY'}
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight">
                    {index === 0 && (
                      <>
                        Where Learning <br />
                        Meets Imagination <br />
                        & Innovation!
                      </>
                    )}
                    {index === 1 && (
                      <>
                        Learn from <br />
                        the Best Educators
                      </>
                    )}
                    {index === 2 && (
                      <>
                        Future-Proof <br />
                        Your Career Today
                      </>
                    )}
                  </h1>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base 2xl:text-lg">
                    {index === 0 &&
                      'Your one-stop destination for unlocking potential and digital growth.'}
                    {index === 1 &&
                      'Dive into a rich curriculum built by industry experts.'}
                    {index === 2 &&
                      'Upskill with top-tier content and stay ahead of the curve.'}
                  </p>
                  <Link href="#">
                    <span className="inline-block mt-3 bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition text-xs sm:text-sm md:text-base">
                      {index === 0 && 'Discover More'}
                      {index === 1 && 'Browse Now'}
                      {index === 2 && 'Get Started'}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* FOLLOW NOW Sidebar (Desktop/Tablet) */}
      <div className="hidden sm:flex flex-col items-center absolute top-1/2 right-2 sm:right-4 md:right-6 lg:right-10 2xl:right-16 -translate-y-1/2 z-30">
        <div className="bg-yellow-400 text-black flex flex-col items-center justify-between py-10 sm:py-12 rounded-full h-56 sm:h-64 2xl:h-72 w-8 sm:w-10 2xl:w-12 shadow-lg border border-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center justify-center rotate-90 text-[10px] sm:text-xs font-bold tracking-wider whitespace-nowrap mb-4">
            FOLLOW NOW
            <img
              src="/downarrow.svg"
              alt="Arrow"
              className="ml-1 h-3 w-auto rotate-[270deg]"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 text-black text-sm 2xl:text-base">
            <Link href="#"><FaFacebookF className="hover:scale-110 transition-transform duration-200" /></Link>
            <Link href="#"><FaInstagram className="hover:scale-110 transition-transform duration-200" /></Link>
            <Link href="#"><FaYoutube className="hover:scale-110 transition-transform duration-200" /></Link>
            <Link href="#"><FaLinkedinIn className="hover:scale-110 transition-transform duration-200" /></Link>
          </div>
        </div>
      </div>

      {/* FOLLOW NOW Bottom Bar (Mobile only) */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-yellow-400 z-40 shadow-inner flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2 text-black font-bold text-sm">
          FOLLOW NOW
          <img
            src="/downarrow.svg"
            alt="Arrow"
            className="h-3 w-auto rotate-[270deg]"
          />
        </div>
        <div className="flex gap-4 text-black text-base">
          <Link href="#"><FaFacebookF /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><FaYoutube /></Link>
          <Link href="#"><FaLinkedinIn /></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
