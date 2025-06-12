'use client'

import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Aboutus_Text = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Mobile & Tablet (sm & md) */}
        <div className="flex flex-col gap-6 lg:hidden">
          <div className="flex justify-between items-center">
            <h2 className="font-gucina text-2xl sm:text-3xl md:text-4xl font-bold relative group leading-none inline-block w-fit">
              About Us
              <span className="absolute left-0 bottom-0 h-[0.0625rem] bg-yellow-400 transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
            </h2>

            <button
              className="font-gucina border border-yellow-400 rounded-[50px] bg-transparent text-yellow-400 flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg font-semibold hover:bg-yellow-400 hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out w-[140px] sm:w-[160px] md:w-[175px] h-10 sm:h-11 md:h-[46px]"
              style={{ lineHeight: '150%', letterSpacing: '0%' }}
            >
              Read More <FaLongArrowAltRight />
            </button>
          </div>

          <p className="font-lexend text-sm sm:text-base md:text-lg text-left">
            Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic together!
          </p>
        </div>

        {/* Large Screens (lg+) */}
        <div className="hidden lg:grid grid-cols-3 gap-12 items-start w-full">
          {/* Left column */}
          <div className="flex flex-col h-full">
            <h2 className="font-gucina text-4xl xl:text-5xl 2xl:text-5xl font-bold relative group leading-none mb-4 inline-block w-fit">
              About Us
              <span className="absolute left-0 bottom-0 h-[0.0625rem] bg-yellow-400 transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
            </h2>

            <div className="mt-auto">
              <button
                className="font-gucina border border-yellow-400 rounded-[50px] bg-transparent text-yellow-400 flex justify-center items-center gap-4 text-xl font-semibold hover:bg-yellow-400 hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out w-[175px] h-[46px]"
                style={{ fontSize: '20px', lineHeight: '150%', letterSpacing: '0%' }}
              >
                Read More <FaLongArrowAltRight />
              </button>
            </div>
          </div>

          {/* Right column spans 2 columns */}
          <div className="col-span-2">
            <p className="font-lexend text-lg 2xl:text-xl text-left">
              Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic together! 
              <br />
              Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus_Text;
