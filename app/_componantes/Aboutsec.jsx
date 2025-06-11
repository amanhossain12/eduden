'use client';

import React from 'react';

const Aboutsec = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="inline-block group relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative leading-tight">
              <span className="relative pl-14 sm:pl-20 z-10">About</span>
              <span className="absolute left-14 sm:left-20 -bottom-1 h-1 w-12 bg-yellow-400 transition-all duration-300 group-hover:w-40"></span>
              <span> Us</span>
            </h2>

            {/* Button */}
            <div className="ml-14 sm:ml-20 mt-6 sm:mt-8">
              <button className="border border-yellow-400 text-sm px-5 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300">
                Read More →
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-5 text-sm sm:text-base leading-relaxed text-gray-300">
          <p>
            Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of
            education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll
            teach you how to slay dragons and code websites, all while cracking jokes and sipping on
            virtual coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den
            revolution? Let’s make learning epic together!
          </p>
          <p>
            We combine creativity with education to create a space where curiosity thrives. Whether
            you're a total beginner or a lifelong learner, Edu-Den is here to make your journey exciting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutsec;
