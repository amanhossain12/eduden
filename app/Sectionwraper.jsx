// app/_components/SectionWrapper.jsx
const SectionWrapper = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 py-8">
      {children}
    </div>
  );
};

export default SectionWrapper;
