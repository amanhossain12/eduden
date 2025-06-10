'use client';

import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="bg-black text-white">
      {/* Top Section: Testimonial */}
      <div className="relative w-full mt-20 md:mt-40 h-[600px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/testi.jpg"
          alt="Testimonial Background"
          fill
          className="object-cover opacity-70"
        />

        <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Testimonial Card */}
          <div className="bg-black/70 rounded-lg p-4 sm:p-6 shadow-lg">
            <p className="text-xs sm:text-sm leading-relaxed mb-4">
              <span className="text-4xl sm:text-6xl text-yellow-400 mr-4 sm:mr-8">“</span>
              Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris
              placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat
              eleifend himenaeos mauris placerat ridiculus odio praesent.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mt-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/user.jpg"
                  alt="Nazmul Islam"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-yellow-400">Nazmul Islam</p>
                  <p className="text-xs text-gray-300">Graphic Designer</p>
                </div>
              </div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-yellow-400 font-semibold text-sm mb-1">Testimonial</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What students say</h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
              Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris
              placerat ridiculus odio praesent. Ex urna finibus natoque auctor pretium etiam consequat
              eleifend himenaeos mauris placerat ridiculus odio praesent.
            </p>
            <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
              View All Testimonial
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Help Section */}
      <div className="relative w-full h-[300px] sm:h-[250px] flex items-center overflow-hidden mt-20 md:mt-40">
        <Image
          src="/bg-2.jpg"
          alt="Help Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center w-full text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Need Help?</h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto md:mx-0">
              Join the Learning Party Now – No Boring Stuff Allowed. Join the Learning Party Now – No
              Boring Stuff Allowed.
            </p>
          </div>
          <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
