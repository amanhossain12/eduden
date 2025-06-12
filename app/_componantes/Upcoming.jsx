'use client';

import Image from 'next/image';

export default function UpcomingEvents() {
  const events = [
    {
      title: 'Artificial Intelligence Bootcamp',
      image: '/event-1.jpg',
      date: 'Jun 12, 2024',
      duration: '1hr, 24m',
    },
    {
      title: 'Cybersecurity Mastery Bootcamp',
      image: '/event-2.jpg',
      date: 'Jun 12, 2024',
      duration: '1hr, 24m',
    },
    {
      title: 'Android App Development Bootcamp',
      image: '/event-3.jpg',
      date: 'Jun 12, 2024',
      duration: '1hr, 24m',
    },
    {
      title: 'Database Management',
      image: '/event-4.jpg',
      date: 'Jun 12, 2024',
      duration: '1hr, 24m',
    },
    {
      title: 'Database Management',
      image: '/event-5.jpg',
      date: 'Jun 12, 2024',
      duration: '1hr, 24m',
    },
    {
      title: 'Database Management',
      image: '/event-6.jpg',
      date: 'Jun 12, 2024',
      duration: '1hr, 24m',
    },
  ];

  return (
    <section className="bg-black  text-white py-16">
      <div className="w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Upcoming <span className="underline decoration-yellow-400">Events</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12 text-sm md:text-base px-2">
          Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the
          mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code
          websites, all while cracking jokes and sipping on virtual coffee.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image */}
              <div className="relative h-[350px] md:h-[450px] w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-300 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent transition-opacity duration-300" />
              </div>

              {/* Event Info */}
              <div className="absolute bottom-0 w-full px-4 sm:px-6 pb-10 text-white z-10 flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold">{event.title}</h3>
                <p className="text-xs md:text-sm text-white mt-3 leading-snug">
                  Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse
                </p>
                <div className="flex items-center pt-8 gap-5 text-xs mt-3 text-white">
                  <span>⏱ {event.duration}</span>
                  <span>📅 {event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
