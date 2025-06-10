'use client';

import Image from 'next/image';

const row1 = ['/logo/amazone.png', '/logo/vmware.png', '/logo/ey.png'];
const row2 = ['/logo/ibm.png', '/logo/tcs.png', '/logo/cisco.png'];
const row3 = ['/logo/ethical den.png', '/logo/accenture.png'];
const row4 = ['/logo/paloalto.png', '/logo/jio.png', '/logo/deloitte.png'];

const scrollingRow1 = [...row1, ...row1];
const scrollingRow2 = [...row2, ...row2];
const scrollingRow3 = [...row3, ...row3];
const scrollingRow4 = [...row4, ...row4];

export default function StudentPlacement() {
  const maskGradient = {
    WebkitMaskImage:
      'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    maskImage:
      'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
  };

  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <div className="inline-block group relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative leading-tight">
              Our Student <br />
              <span className="relative pl-1 z-10">
                Placement
                <span className="absolute left-1 bottom-0 h-1 w-12 bg-yellow-400 rounded transition-all duration-300 group-hover:w-40"></span>
              </span>
            </h2>
          </div>
          <p className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of
            education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to
            slay dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle for
            snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic together!
          </p>
        </div>

        {/* Logos Section */}
        <div className="overflow-hidden space-y-6">
          {[scrollingRow1, scrollingRow2, scrollingRow3, scrollingRow4].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-6 sm:gap-8 whitespace-nowrap"
              style={{
                animation: `${rowIndex % 2 === 0 ? 'scrollRight' : 'scrollLeft'} 40s linear infinite`,
                ...maskGradient,
              }}
            >
              {row.map((logo, idx) => (
                <div
                  key={idx}
                  className="grayscale hover:grayscale-0 transition duration-300 shrink-0"
                >
                  <Image
                    src={logo}
                    alt={`Logo ${idx + 1}`}
                    width={100}
                    height={50}
                    className="object-contain w-24 sm:w-28 md:w-32"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
