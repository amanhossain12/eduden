'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar, FaUser, FaClock, FaComment } from 'react-icons/fa';

const courses = [
  // ... same as before ...
    {
    id: 1,
    category: 'UI/UX Design',
    title: 'UI/UX Design for Web and Mobile for Kids',
    price: '$120',
    rating: 5,
    students: '2.5k',
    duration: '36hr',
    image: '/course-1.jpg',
  },
  {
    id: 2,
    category: 'Graphics Design',
    title: 'Graphic Design for Beginners',
    price: '$120',
    rating: 5,
    students: '2.5k',
    duration: '36hr',
    image: '/course-2.jpg',
  },
  {
    id: 3,
    category: 'Programming',
    title: 'Introduction to Python Programming',
    price: '$120',
    rating: 5,
    students: '2.5k',
    duration: '36hr',
    image: '/course-3.jpg',
  },
  {
    id: 4,
    category: 'Data Science and Machine Learning',
    title: 'Data Science and Machine Learning',
    price: '$120',
    rating: 5,
    students: '2.5k',
    duration: '36hr',
    image: '/course-1.jpg',
  },
  {
    id: 5,
    category: 'Ethical Hacking',
    title: 'Ethical Hacking and Penetration Testing',
    price: '$120',
    rating: 5,
    students: '2.5k',
    duration: '36hr',
    image: '/course-2.jpg',
  },
  {
    id: 6,
    category: 'Network Administration',
    title: 'Network Administration (CCNA)',
    price: '$120',
    rating: 5,
    students: '2.5k',
    duration: '36hr',
    image: '/course-3.jpg',
  },
  {
    id: 7,
    category: 'Web Development',
    title: 'Popular Course in Web Development',
    price: '$120',
    rating: 5,
    students: '2.5k',
    duration: '36hr',
    image: '/course-2.jpg',
  },
  {
    id: 8,
    category: 'DevOps',
    title: 'DevOps and Continuous Integration',
    price: '$120',
    rating: 5,
    students: '2.5k',
    duration: '36hr',
    image: '/course-1.jpg',
  },
];

const allCategories = ['All', ...Array.from(new Set(courses.map(c => c.category)))];

export default function AllCourses() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
   
      <section className="bg-black text-white py-16">
  <div className="w-full">
    {/* Heading updated for left-align till lg, center from xl */}
    <div className="mb-10 text-left xl:text-center px-4 xl:px-0 max-w-7xl mx-auto">
      <p className="text-yellow-400 uppercase text-sm">Popular Courses</p>
      <div className="group inline-block">
        <h2 className="text-3xl sm:text-4xl font-bold">
          All <span className="text-yellow-400">Courses</span>
        </h2>
        <div className="h-1 bg-yellow-400 w-20 mt-2 transition-all duration-300 group-hover:w-40 rounded-full"></div>
      </div>
    </div>


        {/* Dropdown Filter for small to large screens */}
    <div className="block xl:hidden mb-10 px-4">
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="bg-black border border-yellow-400 text-white px-4 py-2 rounded-full w-full"
  >
    {allCategories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>
</div>


        {/* Button Filter for xl and up */}
        <div className="hidden xl:flex flex-wrap gap-3 mb-10 px-4">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-semibold border transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-yellow-500 text-black'
                  : 'border-white text-white hover:bg-yellow-400 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden group relative transition-all duration-500"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-yellow-400 z-10 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {course.category}
                </span>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(course.rating)].map((_, i) => (
                    <FaStar key={i} className="text-black text-sm" />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 leading-snug text-black">
                  Introduce About {course.title}
                </h3>
                <p className="text-sm text-black mb-4 h-40 overflow-y-auto">
                  we’re your one-stop destination for unlocking your potential and conquering the digital.
                </p>
                <div className="flex justify-between items-center text-black text-sm font-semibold">
                  <button className="bg-black text-white px-4 py-2 rounded-full">Enroll Now</button>
                  <span className="font-bold">{course.price}</span>
                </div>
                <div className="flex justify-between text-black text-sm border-t pt-4 mt-4">
                  <div className="flex items-center gap-1">
                    <FaUser className="text-xs" /> {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-xs" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaComment className="text-xs" /> 2.5k
                  </div>
                </div>
              </div>

              {/* Default View */}
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-bold text-lg px-4 py-6 rounded-full shadow-md">
                  {course.price}
                </div>
              </div>
              <div className="p-5 pt-8">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {course.category}
                </span>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(course.rating)].map((_, i) => (
                    <FaStar key={i} className="text-orange-400 text-sm" />
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  we’re your one-stop destination for unlocking your potential and conquering the digital.
                </p>
                <div className="flex justify-between text-gray-500 text-sm border-t pt-4">
                  <div className="flex items-center gap-1">
                    <FaUser className="text-xs" /> {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-xs" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaComment className="text-xs" /> 2.5k
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
