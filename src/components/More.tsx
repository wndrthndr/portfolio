import React, { useEffect, useRef, useState } from "react";

const More = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const scraps = [
    { title: "WebDev Intern", description: "Building and maintaining websites for Ventura", rotation: -2 },
    { title: "SQL Certification", description: "Completed SQL for Data Science on Coursera.", rotation: 3 },
    { title: "Problem Solving", description: "Solved 300+ problems on LeetCode and GeeksforGeeks.", rotation: -1 },
    { title: "AI Automation", description: "Built a Telegram bot that delivers daily updates", rotation: 2 },
  ];

  // Observe when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="More" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="handwritten text-4xl text-vintage-brown text-center mb-16 transform -rotate-2">
          More Adventures
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {scraps.map((scrap, index) => (
            <div
              key={scrap.title}
              className={`
                paper-scrap cursor-pointer transition-transform duration-500
                ${animate ? "animate-scrapSpinIn" : "opacity-0"}
              `}
              style={{
                "--final-rotation": `${scrap.rotation}deg`,
              }}
            >
              <h3 className="handwritten text-xl text-vintage-brown mb-3">
                {scrap.title}
              </h3>

              <p className="typewriter text-vintage-brown opacity-80 leading-relaxed">
                {scrap.description}
              </p>

              <div className="absolute top-2 right-2 w-4 h-4 bg-vintage-blue rounded-full opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;
