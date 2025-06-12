"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const Placement = () => {
  return (
    <div className="bg-black  lg:px-[100px] text-white pt-[60px] flex flex-col lg:flex-row justify-between items-center gap-10">
      {/* Left Section: Heading and Text */}
      <div className="lg:mr-[100px] w-full lg:w-1/2">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-5 leading-tight relative group">
          Our Student <br />
          <span className="relative inline-block pl-1 z-10">
            Placement
            <span className="absolute left-0 bottom-0 h-1 w-12 bg-yellow-400 rounded transition-all duration-300 group-hover:w-40"></span>
          </span>
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          Well, because we’re not your grandma’s boring old school! At Edu-Den,
          we’re the rebels of education, the mavericks of learning, and the
          champions of fun-filled knowledge. We’ll teach you how to slay dragons
          and code websites, all while cracking jokes and sipping on virtual
          coffee. So, why settle for snooze-worthy lectures when you can join
          the Edu-Den revolution? Let’s make learning epic together!
        </p>
      </div>

      {/* Right Section: Marquee Logos */}
      <div className="w-full lg:w-1/2 space-y-8">
        {/* Marquee Row 1 */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <Marquee speed={10} loop={0} gradient={false} autoFill pauseOnHover={false}>
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/amazone.png" alt="Amazon" />
            <img className="h-[22px] sm:h-[25px] mx-5" src="/logo/vmware.png" alt="VMware" />
            <img className="h-[30px] sm:h-[40px] mx-5" src="/logo/ey.png" alt="EY" />
          </Marquee>
        </div>

        {/* Marquee Row 2 */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <Marquee speed={10} loop={0} gradient={false} autoFill pauseOnHover direction="right">
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/ibm.png" alt="IBM" />
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/tcs.png" alt="TCS" />
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/cisco.png" alt="Cisco" />
          </Marquee>
        </div>

        {/* Marquee Row 3 */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <Marquee speed={10} loop={0} gradient={false} autoFill pauseOnHover>
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/amazone.png" alt="Amazon" />
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/accenture.png" alt="Accenture" />
          </Marquee>
        </div>

        {/* Marquee Row 4 */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <Marquee speed={10} loop={0} gradient={false} autoFill pauseOnHover direction="right">
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/paloalto.png" alt="Palo Alto" />
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/vmware.png" alt="VMware" />
            <img className="h-[25px] sm:h-[30px] mx-5" src="/logo/deloitte.png" alt="Deloitte" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Placement;
