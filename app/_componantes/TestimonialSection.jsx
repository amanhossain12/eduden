'use client';

import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="bg-black text-white">
      {/* Top Section: Testimonial */}
      <div className="relative w-full mt-40 h-[500px]  flex items-center justify-center overflow-hidden">
        <Image
          src="/testi.jpg" // Replace with your image
          alt="Testimonial Background"
          fill
          className="object-cover opacity-70"
        />

        <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Testimonial Card */}
          <div className="bg-black/70 rounded-lg p-6 shadow-lg">
            <p className="text-sm leading-relaxed mb-4">
              <span className="text-6xl text-yellow-400 mr-8">“</span>
          Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesentEx urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/user.jpg" // Replace with actual user image
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
          <div className="text-right md:text-left">
            <p className="text-yellow-400 font-semibold text-sm">Testimonial</p>
            <h2 className="text-4xl font-bold mb-4">What students say</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
             Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent
            </p>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
              View All Testimonial
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Help Section */}
      <div className="relative w-full h-[250px] flex items-center overflow-hidden mt-40">
        <Image
          src="/bg-2.jpg" // Replace with your image
          alt="Help Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center w-full">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Need Help?</h2>
            <p className="text-gray-300 text-sm max-w-xl">
              Join the Learning Party Now – No Boring Stuff Allowed. Join the Learning Party Now – No Boring Stuff Allowed.
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-lime-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-300 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
