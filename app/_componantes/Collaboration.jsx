"use client";
import Image from 'next/image';
import Marquee from "react-fast-marquee";

export default function Collaboration() {
  return (
    <div>
      {/* Collaboration Section */}
      <section className="bg-black mt-20  sm:mt-32 text-white py-12 sm:py-16">
        <div className="max-w-none w-full">
          {/* Collaboration Text */}
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-yellow-400 uppercase text-sm">Our Partner</p>

            <div className="inline-block group">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Our{' '}
                <span className="text-yellow-400 relative">
                  Collaboration
                  <span className="block h-1 bg-yellow-400 w-20 mt-1 transition-all duration-300 group-hover:w-75 rounded-full"></span>
                </span>
              </h2>
            </div>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 leading-relaxed px-2 sm:px-0">
              Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of
              education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach
              you how to slay dragons and code websites, all while cracking jokes and sipping on virtual
              coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den revolution?
              Let’s make learning epic together!
            </p>
          </div>

          {/* Partner Logos Marquee */}
          <div className="w-full space-y-8">
            <Marquee
              speed={30}
              loop={0}
              autoFill="true"
              gradient={false}
              pauseOnHover={true}
              className="flex items-center"
            >
              <Image className="h-[25px] sm:h-[30px] mx-5" src="/group 150.png" alt="Fowzi Media" width={120} height={30} />
              <Image className="h-[22px] sm:h-[25px] mx-5" src="/layer-2.png" alt="Intellects.exe" width={110} height={30} />
              <Image className="h-[30px] sm:h-[40px] mx-5" src="/layer-1.png" alt="Randomuse" width={120} height={30} />
              <Image className="h-[30px] sm:h-[40px] mx-5" src="/logo/ethical den.png" alt="Ethical Den" width={120} height={30} />
            </Marquee>
          </div>
        </div>
      </section>

      
      
    </div>
  );
}
