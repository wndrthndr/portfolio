import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

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

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Skills" ref={sectionRef} className="py-20 bg-worn-paper">
      <div className="container mx-auto px-4">
        <h2 className="handwritten text-4xl text-vintage-brown text-center mb-16 -rotate-1">
          Skills & Passions
        </h2>

        {/* Skill Cards */}
        <div className="flex flex-wrap justify-center gap-12">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`
                relative w-72 bg-vintage-cream p-6 shadow-vintage transform 
                ${animate ? (
                  i === 1
                    ? "animate-slideCenter"
                    : i === 0
                    ? "animate-slideLeft"
                    : "animate-slideRight"
                ) : "opacity-0"}
              `}
              style={{
                transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
              }}
            >
              {/* Tape strips */}
              <div className="absolute -top-3 left-6 w-16 h-4 bg-yellow-200 rotate-[-6deg] opacity-80"></div>
              <div className="absolute -top-3 right-6 w-16 h-4 bg-yellow-200 rotate-6 opacity-80"></div>

              {/* Title */}
              <h3 className="handwritten text-2xl text-vintage-blue mb-4">
                {category.title}
              </h3>

              {/* Skill list */}
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
