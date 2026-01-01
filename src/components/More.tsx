import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const More = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();

    // Animate boxes from center "big box"
    gsap.fromTo(
      boxRefs.current,
      {
        x: bounds.width / 2 - 150,
        y: bounds.height / 2 - 100,
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      }
    );
  }, []);

  const panels = [
    {
      title: "More Than Just Code",
      content:
        "Beyond projects, I continuously invest time in problem solving, certifications, and automation to strengthen fundamentals and system thinking.",
      span: "lg:col-span-2",
      big: true,
    },
    {
      title: "WebDev Intern",
      content: "Building and maintaining websites for Ventura.",
    },
    {
      title: "SQL Certification",
      content: "SQL for Data Science — Coursera.",
    },
    {
      title: "LeetCode",
      content: "Solved 300+ problems across DSA and algorithmic patterns.",
      link: "https://leetcode.com/yourusername",
      highlight: true,
    },
    {
      title: "GeeksforGeeks",
      content: "Core DSA practice and competitive programming fundamentals.",
      link: "https://auth.geeksforgeeks.org/user/yourusername",
      highlight: true,
    },
    {
      title: "AI Automation",
      content: "Built Telegram bots and automation workflows.",
    },
  ];

  return (
    <section id="More" className="py-28 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={containerRef}
          className="
            grid grid-cols-1 lg:grid-cols-4
            gap-6 max-w-7xl mx-auto
          "
        >
          {panels.map((panel, i) => {
            const Wrapper = panel.link ? "a" : "div";

            return (
              <Wrapper
                key={i}
                href={panel.link}
                target={panel.link ? "_blank" : undefined}
                ref={(el: HTMLDivElement) => {
                  if (el) boxRefs.current[i] = el;
                }}
                className={`
                  ${panel.span ?? ""}
                  border-2 border-dotted border-[#7a4a2e]
                  p-${panel.big ? "10" : "8"}
                  transition-all duration-300
                  hover:bg-[#f6d6dd]
                  focus:bg-[#f6d6dd]
                `}
              >
                <h3
                  className={`
                    handwritten
                    ${panel.big ? "text-4xl" : "text-2xl"}
                    text-vintage-brown
                    mb-4
                  `}
                >
                  {panel.title}
                </h3>

                <p className="typewriter text-vintage-brown opacity-80 leading-relaxed">
                  {panel.content}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default More;
