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
      const rail = railRef.current;
      if (!rail) return;

      gsap.to(rail, {
        xPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=400 top",
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
      className="relative h-[140vh] bg-white overflow-hidden"
    >
      {/* Title */}
      <div className="sticky top-20 z-10 mb-20">
        <h2 className="handwritten text-4xl text-vintage-brown text-center -rotate-1">
          More Adventures
        </h2>
      </div>

      {/* Rail */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full">
        <div
          ref={railRef}
          className="flex gap-16 px-[20vw] will-change-transform"
        >
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="
                min-w-[320px]
                bg-vintage-cream
                p-8
                shadow-vintage
                transition-transform duration-500
                hover:scale-105
              "
              style={{
                transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})`,
              }}
            >
              <h3 className="handwritten text-2xl text-vintage-brown mb-4">
                {exp.title}
              </h3>

              <p className="uppercase tracking-widest text-xs text-vintage-blue mb-4">
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
    </section>
  );
};

export default More;
