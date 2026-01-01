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
      // ---- Scroll-based centering motion ----
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const offset =
          i === 0 ? -120 : i === 2 ? 120 : 0; // side cards move inward

        gsap.fromTo(
          card,
          { x: offset },
          {
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 55%",
              scrub: true,
            },
          }
        );
      });

      // ---- Wind / cloth movement (lower half illusion) ----
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.to(card, {
          rotation: () => gsap.utils.random(-1.5, 1.5),
          y: () => gsap.utils.random(-4, 4),
          duration: () => gsap.utils.random(2.5, 4),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: gsap.utils.random(1, 3),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Skills"
      ref={sectionRef}
      className="py-20 bg-worn-paper overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="handwritten text-4xl text-vintage-brown text-center mb-16 -rotate-1">
          Skills & Passions
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {categories.map((category, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="
                relative w-72 bg-vintage-cream p-6 shadow-vintage
                transform will-change-transform
              "
              style={{
                rotate: i % 2 === 0 ? "-2deg" : "2deg",
                transformOrigin: "center top",
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
