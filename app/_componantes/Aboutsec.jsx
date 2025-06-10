import React from 'react';

const Aboutsec = () => {
  return (
    <section className="bg-black text-white px-6 sm:px-10 py-16 sm:py-20 md:flex md:items-start md:justify-between">
      {/* Left Section */}
      <div className="mb-10 md:mb-0 md:w-1/2">
        <div className="inline-block group relative">
          <h2 className="text-4xl sm:text-5xl font-bold relative">
            <span className="relative pl-16 sm:pl-20 z-10">About</span>
            <span className="absolute left-16 sm:left-20 bottom-0 h-1 w-12 bg-yellow-400 transition-all duration-300 group-hover:w-40"></span>
            <span> Us</span>
          </h2>

          {/* Button */}
          <div className="ml-16 sm:ml-20 mt-8">
            <button className="border border-yellow-400 text-sm px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
              Read More →
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-5 text-sm leading-relaxed">
        <p>
          Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of
          education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll
          teach you how to slay dragons and code websites, all while cracking jokes and sipping on
          virtual coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den
          revolution? Let’s make learning epic together!
        </p>
        <p>
          Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of
          education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll
          teach you how to slay dragons and code websites, all while cracking jokes and sipping on
          virtual coffee.
        </p>
      </div>
    </section>
  );
};

export default Aboutsec;
