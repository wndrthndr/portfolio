import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const More = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "WebDev Intern",
      category: "Professional Experience",
      duration: "6 Months",
      price: "Ventura",
    },
    {
      title: "SQL Certification",
      category: "Certification",
      duration: "Self-paced",
      price: "Coursera",
    },
    {
      title: "Problem Solving",
      category: "Competitive Coding",
      duration: "300+ Problems",
      price: "LeetCode / GFG",
    },
    {
      title: "AI Automation",
      category: "Side Project",
      duration: "Daily Bot",
      price: "Telegram",
    },
    {
      title: "System Design Practice",
      category: "Learning",
      duration: "Ongoing",
      price: "Self-driven",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!railRef.current) return;

      gsap.to(railRef.current, {
        xPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="More"
      ref={sectionRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 pt-20">
        {/* Heading */}
        <h2 className="handwritten text-4xl text-vintage-brown text-center mb-10 -rotate-1">
          More Adventures
        </h2>

        {/* Rail */}
        <div className="relative overflow-hidden">
          <div
            ref={railRef}
            className="flex gap-12 px-[10vw] will-change-transform"
          >
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="
                  min-w-[300px]
                  bg-vintage-cream
                  p-7
                  shadow-vintage
                  transition-transform duration-300
                  hover:-translate-y-1
                "
                style={{
                  transform: `rotate(${i % 2 === 0 ? "-0.6deg" : "0.6deg"})`,
                }}
              >
                <h3 className="handwritten text-xl text-vintage-brown mb-3">
                  {exp.title}
                </h3>

                <p className="uppercase tracking-widest text-xs text-vintage-blue mb-3">
                  {exp.category}
                </p>

                <div className="flex justify-between text-sm text-vintage-brown opacity-80">
                  <span>{exp.duration}</span>
                  <span>{exp.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
