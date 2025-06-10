import Image from 'next/image';

export default function Collaboration() {
  return (
    <div>
      {/* Collaboration Section */}
      <section className="bg-black mt-20 sm:mt-32 text-white px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Collaboration Text */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <p className="text-yellow-400 uppercase text-sm">Our Partner</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our{' '}
              <span className="text-yellow-400 underline decoration-yellow-400 underline-offset-4">
                Collaboration
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 leading-relaxed">
              Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of
              education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach
              you how to slay dragons and code websites, all while cracking jokes and sipping on virtual
              coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den revolution?
              Let’s make learning epic together!
            </p>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 md:gap-24 lg:gap-32">
            <Image src="/logo/ethical den.png" alt="Ethical Den" width={160} height={50} />
            <Image src="/group 150.png" alt="Fowzi Media" width={160} height={50} />
            <Image src="/layer-1.png" alt="Randomuse" width={130} height={50} />
            <Image src="/layer-2.png" alt="Intellects.exe" width={130} height={50} />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] sm:h-screen mt-20 sm:mt-32 mb-20 sm:mb-40 bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/girl.jpg"
            alt="Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
          <p className="text-yellow-400 text-sm mb-2 sm:mb-3">Join Our Clan</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">
            Unlock Your Inner <br /> Genius at Edu–Den!
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6">
            Join the Learning Party Now – No Boring Stuff Allowed.
          </p>
          <button className="bg-yellow-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
}
