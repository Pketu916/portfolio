import { useRef, useState } from "react";

const faqs = [
  {
    question: "Is GST bill available?",
    answer: "Yes, we provide GST invoices for all applicable purchases.",
  },
  {
    question: "Is post-delivery maintenance available?",
    answer: "Yes, we offer optional maintenance packages after delivery.",
  },
  {
    question: "Can I request custom changes after project delivery?",
    answer: "Absolutely! We support custom iterations with mutual agreement.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work globally and accommodate different time zones.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getAnswerHeight = (index) => {
    const el = answerRefs.current[index];
    if (!el) return 0;
    return el.scrollHeight + 32; // add extra space for padding
  };

  return (
    <section
      className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white py-16 px-6 md:px-12 backdrop-blur-sm relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 70% 30%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Title */}
        <div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-3xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg animate-pulse leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Get clarity on your queries regarding services, billing, delivery
            and more.
          </p>
        </div>

        {/* Right Side: FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="border-none rounded-none w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-white/5 hover:bg-white/10 transition-colors text-white"
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="text-xl text-primary">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="faq-answer px-6 text-gray-300 overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${getAnswerHeight(index)}px`
                      : "0px",
                  opacity: activeIndex === index ? 1 : 0,
                  paddingTop: activeIndex === index ? "20px" : "0px",
                  paddingBottom: activeIndex === index ? "20px" : "0px",
                }}
              >
                <p className="pb-0">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
