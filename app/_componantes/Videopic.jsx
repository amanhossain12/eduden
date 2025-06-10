'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full h-[80vh] sm:h-screen mt-24 sm:mt-40 bg-black flex items-center justify-center overflow-hidden">
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
        className="absolute z-10 cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full border-4 border-white flex items-center justify-center transition-transform group-hover:scale-105">
          <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-t-[10px] sm:border-t-[12px] border-b-[10px] sm:border-b-[12px] border-white border-t-transparent border-b-transparent ml-1" />
        </div>
      </div>

      {/* Modal Video Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
