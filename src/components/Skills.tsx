import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const categories = [
    {
      title: "Languages",
      items: ["Java", "SQL", "Html/Css/JS", "PHP"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React", "Next.js", "Tailwind CSS", "PHP myAdmin"],
    },
    {
      title: "Creative & Tools",
      items: ["UI/UX Design", "N8N", "Problem Solving"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const [left, center, right] = cardsRef.current;

      if (!left || !center || !right) return;

      // Initial overlap state
      gsap.set(left, { x: 80, zIndex: 3 });
      gsap.set(right, { x: -80, zIndex: 3 });
      gsap.set(center, { zIndex: 1 });

      // Scroll-driven reveal
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
        },
      })
        .to(left, {
          x: -140,
          ease: "none",
        })
        .to(
          right,
          {
            x: 140,
            ease: "none",
          },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Skills"
      ref={sectionRef}
      className="py-24 bg-worn-paper overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="handwritten text-4xl text-vintage-brown text-center mb-20 -rotate-1">
          Skills & Passions
        </h2>

        <div className="relative flex justify-center items-center h-[420px]">
          {categories.map((category, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="
                absolute w-72 bg-vintage-cream p-6 shadow-vintage
                will-change-transform
              "
              style={{
                rotate: i === 1 ? "0deg" : i === 0 ? "-2deg" : "2deg",
              }}
            >
              {/* Tape */}
              <div className="absolute -top-3 left-6 w-16 h-4 bg-yellow-200 rotate-[-6deg] opacity-80"></div>
              <div className="absolute -top-3 right-6 w-16 h-4 bg-yellow-200 rotate-6 opacity-80"></div>

              <h3 className="handwritten text-2xl text-vintage-blue mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2 typewriter text-vintage-brown text-base">
                {category.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-vintage-brown opacity-70"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
