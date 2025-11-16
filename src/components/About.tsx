import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [typedText, setTypedText] = useState("");

  // Static part (directly shown)
  const staticText = `
Hello there! I'm Vishal Nukala, a passionate web developer and tech explorer who believes that every line of code can make a meaningful impact.
  
Over the years, I’ve crafted digital experiences that aren’t just functional—they’re intuitive, engaging, and memorable.
`;

  // Part that will be typed (last 2–3 lines)
  const typingText = `
When I’m not building web applications, you’ll find me tinkering with AI experiments, exploring the latest gadgets, or diving into new technologies. 
This curiosity fuels my work, inspiring creative solutions and innovative ideas in every project I undertake.

I specialize in React, JavaScript, and modern web development technologies, but I never lose sight of the human element behind every interface. 
Each project is an opportunity to connect with users, solve real problems, and leave a lasting impression through thoughtful design and seamless functionality.
`;

  // Start typing when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.4 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  // Typing animation
  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const speed = 12;

    const interval = setInterval(() => {
      setTypedText(typingText.slice(0, i));
      i++;

      if (i > typingText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <section id="About" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" ref={aboutRef}>
          <h2 className="handwritten text-4xl text-vintage-brown text-center mb-12 transform -rotate-1">
            About Me
          </h2>

          <div
            className="sketched-border border-dotted bg-[#ffff] p-8 min-h-[300px]"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <div className="typewriter text-vintage-brown leading-relaxed space-y-6 text-lg whitespace-pre-line">

              {/* Static part */}
              {staticText}

              {/* Typing part */}
              {typedText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
