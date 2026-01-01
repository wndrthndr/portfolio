import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const More = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();

    gsap.fromTo(
      boxRefs.current,
      {
        x: bounds.width / 2 - 180,
        y: bounds.height / 2 - 120,
        opacity: 0,
        scale: 0.94,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
  }, []);

  const panels = [
    {
      title: "More Than Just Code",
      content:
        "Beyond projects, I continuously invest time in problem solving, certifications, and automation. These experiences shape how I approach engineering, design systems, and write scalable software.",
      span: "lg:col-span-2",
      big: true,
    },
    {
      title: "WebDev Intern",
      content: "Building and maintaining production-ready websites for Ventura.",
    },
    {
      title: "SQL Certification",
      content: "Completed SQL for Data Science with hands-on querying and analysis.",
    },
    {
      title: "LeetCode",
      content:
        "Solved 300+ problems covering data structures, algorithms, and common interview patterns.",
      link: "https://leetcode.com/yourusername",
      highlight: true,
    },
    {
      title: "GeeksforGeeks",
      content:
        "Practiced core DSA concepts and competitive programming fundamentals.",
      link: "https://auth.geeksforgeeks.org/user/yourusername",
      highlight: true,
    },
    {
      title: "AI Automation",
      content:
        "Built Telegram bots and automation workflows to deliver daily updates.",
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
                  transition-colors duration-300
                  hover:bg-[#f6d6dd]
                  focus:bg-[#f6d6dd]
                  flex flex-col
                  ${panel.big ? "p-12" : "p-9"}
                `}
              >
                {/* Title */}
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

                {/* Body */}
                <p
                  className={`
                    typewriter
                    text-vintage-brown
                    opacity-85
                    leading-relaxed
                    ${panel.big ? "max-w-2xl text-lg" : "text-base"}
                  `}
                >
                  {panel.content}
                </p>

                {/* Optional spacer for visual balance */}
                {panel.highlight && (
                  <span className="mt-6 text-xs uppercase tracking-widest text-vintage-blue">
                    View Profile →
                  </span>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default More;
