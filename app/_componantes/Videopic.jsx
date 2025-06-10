'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full h-screen mt-40 bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/video-pic.jpg" // Replace with your image path
        alt="Video Thumbnail"
        fill
        className="object-cover"
        priority
      />

      {/* Play Button - Matched Design */}
      <div
        className="absolute z-10 cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-[80px] h-[80px] rounded-full border-4 border-white flex items-center justify-center transition-transform group-hover:scale-105">
          <div className="w-0 h-0 border-l-[20px] border-t-[12px] border-b-[12px] border-white border-t-transparent border-b-transparent ml-1" />
        </div>
      </div>

      {/* Modal Video Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl px-4">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
