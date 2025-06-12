'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative   h-[50vh] sm:h-screen mt-24 sm:mt-40  flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/video-pic.jpg" // Replace with your image path
        alt="Video Thumbnail"
        fill
        className="object-cover"
        priority
      />

      {/* Play Button */}
      <div
        className="absolute  z-10 cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full border-4 border-white flex items-center justify-center transition-transform group-hover:scale-105">
          <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-t-[10px] sm:border-t-[12px] border-b-[10px] sm:border-b-[12px] border-white border-t-transparent border-b-transparent ml-1" />
        </div>
      </div>

     {isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-0 m-0">
    <div className="relative w-full h-screen">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-6 text-white text-4xl font-bold z-10"
      >
        &times;
      </button>
    </div>
  </div>
)}

    </section>
  );
}
