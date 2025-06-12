'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ByteSkill?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
  },
  {
    question: 'How do I register on ByteSkill?',
    answer:
      'You can register by clicking the sign-up button on the top right and filling out your details.',
  },
  {
    question: 'Do ByteSkill courses come with certificates?',
    answer: 'Yes, all courses offer certificates after completion.',
  },
  {
    question: 'Is there tutor support available on ByteSkill?',
    answer: 'Yes, live tutor support is available for most courses.',
  },
  {
    question: 'How do I make payments for ByteSkill courses?',
    answer: 'You can pay via credit card, debit card, or UPI.',
  },
  {
    question: 'Are ByteSkill courses suitable for beginners?',
    answer: 'Absolutely! We have beginner-friendly content for all levels.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-24 py-16 sm:py-20 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Heading outside the flex so it's not aligned with the CTA */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 leading-tight">
          <span className="text-white">F</span>
          <span className="underline decoration-yellow-400">requently</span>
          <br />
          Asked Question
        </h2>

        {/* FAQ and CTA in one row, aligned properly */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* FAQ List */}
          <div className="lg:w-2/3 w-full space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1C1C1C] p-5 rounded-2xl transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center text-left font-medium sm:font-semibold text-base sm:text-lg"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p
                    id={`faq-answer-${index}`}
                    aria-labelledby={`faq-question-${index}`}
                    className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box aligned with top of first question */}
          <div className="bg-[#1C1C1C] rounded-2xl p-10 flex flex-col items-center text-center shadow-xl w-full max-w-lg self-start">
            <img
              src="/Vector.png"
              alt="Message Icon"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-6"
            />
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight mb-2">
              Do you have
              <br />
              <span className="font-bold">more question?</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, ut
              enim ad minim veniam.
            </p>
            <a
              href="mailto:support@byteskill.com"
              className="bg-lime-400 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
