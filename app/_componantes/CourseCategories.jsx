import {
  FaLock,
  FaMobileAlt,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaUserAlt,
  FaBrain,
  FaShieldAlt,
} from 'react-icons/fa';

const categories = [
  {
    title: 'Cyber Security',
    description:
      'Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse',
    icon: <FaShieldAlt size={30} />,
  },
  {
    title: 'UI/UX Design',
    description:
      'Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse',
    icon: <FaUserAlt size={24} />,
  },
  {
    title: 'Web Development',
    description:
      'Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse',
    icon: <FaCode size={24} />,
  },
  {
    title: 'Graphic Design',
    description:
      'Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse',
    icon: <FaPaintBrush size={24} />,
  },
  {
    title: 'Mobile App Development',
    description:
      'Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse',
    icon: <FaMobileAlt size={24} />,
  },
  {
    title: 'Programming Languages',
    description:
      'Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse',
    icon: <FaLaptopCode size={24} />,
  },
  {
    title: 'Data Science and AI',
    description:
      'Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse',
    icon: <FaBrain size={24} />,
  },
  {
    title: 'Database Management',
    description:
      'Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse',
    icon: <FaDatabase size={24} />,
  },
];

export default function CourseCategories() {
  return (
    <section className="bg-black text-white sm:pt[75px] md:pt[75px] sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-yellow-400 uppercase text-sm mb-2">Popular Categories</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Course <span className="underline decoration-yellow-400">Categories</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2  gap-0.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 flex flex-col items-center text-center gap-4 bg-zinc-900 group hover:bg-yellow-400 transition-all duration-300 text-white hover:text-black"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white group-hover:bg-black group-hover:text-white transition">
              {/* Icon changes to lock on hover */}
              <div className="group-hover:hidden">{cat.icon}</div>
              <div className="hidden group-hover:block">
                <FaLock size={24} />
              </div>
            </div>

            <h3 className="text-base md:text-lg font-bold">{cat.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed">{cat.description}</p>
            <div className="mt-auto text-3xl sm:text-4xl font-bold text-blue-400 group-hover:text-black text-center">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
