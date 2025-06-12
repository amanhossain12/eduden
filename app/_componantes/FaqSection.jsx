'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ByteSkill?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
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
    <section className="bg-black  text-white py-12 sm:py-16 lg:py-20 font-[Poppins]">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 leading-tight px-4 sm:px-0">
          <span className="text-white">F</span>
          <span className="underline decoration-yellow-400">requently</span>
          <br />
          Asked Question
        </h2>

        {/* FAQ + CTA Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start px-0">
          {/* FAQ List */}
          <div className="w-full lg:w-[70%] space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1C1C1C] p-4 sm:p-5 rounded-2xl transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center text-left font-medium sm:font-semibold text-sm sm:text-base lg:text-lg"
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
                    className="mt-3 text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="w-full lg:w-[30%] bg-[#1C1C1C] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center shadow-xl lg:h-[33rem]">
            <img
              src="/Vector.png"
              alt="Message Icon"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6"
            />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight mb-2">
              Do you have
              <br />
              <span className="font-bold">more question?</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 max-w-[280px] sm:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <a
              href="mailto:support@byteskill.com"
              className="bg-yellow-400 text-black font-semibold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
