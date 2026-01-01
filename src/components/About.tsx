import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLParagraphElement[]>([]);

  const staticText = `
Hello there! I'm Vishal Nukala, a passionate web developer and tech explorer who believes that every line of code can make a meaningful impact.

Over the years, I’ve crafted digital experiences that aren’t just functional—they’re intuitive, engaging, and memorable.
`;

  const revealText = [
    "When I’m not building web applications, you’ll find me tinkering with AI experiments, exploring the latest gadgets, or diving into new technologies.",
    "This curiosity fuels my work, inspiring creative solutions and innovative ideas in every project I undertake.",
    "I specialize in React, JavaScript, and modern web development technologies, but I never lose sight of the human element behind every interface.",
    "Each project is an opportunity to connect with users, solve real problems, and leave a lasting impression through thoughtful design and seamless functionality.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(revealRefs.current, {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        y: 10,
        rotate: -0.6,
      });

      gsap.to(revealRefs.current, {
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.28,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="About" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          <h2 className="handwritten text-4xl text-vintage-brown text-center mb-14 -rotate-1">
            About Me
          </h2>

          <div
            className="sketched-border bg-white p-8 shadow-vintage"
            style={{ transform: "rotate(-0.4deg)" }}
          >
            <div className="typewriter text-vintage-brown leading-relaxed text-lg space-y-6 whitespace-pre-line">
              {/* Static intro */}
              {staticText}

              {/* Revealed thoughts */}
              {revealText.map((text, i) => (
                <p
                  key={i}
                  ref={(el) => {
                    if (el) revealRefs.current[i] = el;
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
