'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ByteSkill?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'How do I register on ByteSkill?',
    answer: 'You can register by clicking the sign-up button on the top right and filling out your details.',
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
    <section className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-24 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* FAQ Content */}
        <div className="md:col-span-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 sm:mb-10 leading-tight">
            <span className="text-white">F</span>
            <span className="underline decoration-yellow-400">requently</span>
            <br />
            Asked Question
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-900 p-4 sm:p-5 rounded-lg shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex justify-between items-center text-left font-semibold text-sm sm:text-base"
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
        </div>

        {/* CTA Box */}
        <div className="bg-neutral-900 rounded-lg p-6 sm:p-8 flex flex-col items-center text-center shadow mt-10 md:mt-0">
          <img
            src="/Vector.png"
            alt="Message Icon"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6"
          />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            Do you have more questions?
          </h3>
          <p className="text-gray-400 mb-4 text-xs sm:text-sm max-w-[280px] sm:max-w-[320px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="mailto:support@byteskill.com"
            className="bg-lime-400 text-black font-bold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-yellow-300 transition text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
