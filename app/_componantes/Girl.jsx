"use client";

import Image from 'next/image';
import React from 'react';

const Girl = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-screen mt-20 sm:mt-32 mb-20 sm:mb-40 bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/girl.jpg"
            alt="Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl">
          <p className="text-yellow-400 text-sm mb-2 sm:mb-3">Join Our Clan</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">
            Unlock Your Inner <br /> Genius at Edu–Den!
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6">
            Join the Learning Party Now – No Boring Stuff Allowed.
          </p>
          <button className="bg-yellow-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Girl;
