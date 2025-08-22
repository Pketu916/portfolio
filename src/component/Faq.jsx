import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

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

  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end:"top 50%",
          scrub:true,
        },
      }
    );
  }, []);

  const toggleFaq = (index) => {
    const answer = answerRefs.current[index];
    const isOpen = activeIndex === index;

    // Close all
    answerRefs.current.forEach((el, i) => {
      if (el && i !== index) {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          paddingBottom: 0,
          duration: 0.8,
          ease: "power4.inOut",
        });
      }
    });

    if (isOpen) {
      setActiveIndex(null);
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        paddingBottom: 0,
        duration: 0.8,
        ease: "power4.inOut",
      });
    } else {
      setActiveIndex(index);
      gsap.set(answer, { height: "auto" });
      const height = answer.scrollHeight;
      gsap.fromTo(
        answer,
        { height: 0, opacity: 0, paddingBottom: 0 },
        {
          height,
          opacity: 1,
          paddingBottom: 16,
          duration: 0.8,
          ease: "power4.inOut",
        }
      );
    }
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-6 md:px-12">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Left Side: Title */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Get clarity on your queries regarding services, billing, delivery
            and more.
          </p>
        </div>

        {/* Right Side: FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-cyan-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="border-none rounded-none w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#101820] hover:bg-[#13202c] transition-colors "
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="faq-answer px-6 text-gray-300 overflow-hidden"
                style={{ height: 0, opacity: 0, paddingBottom: 0 }}
              >
                <p className="py-5 min-h-10">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
