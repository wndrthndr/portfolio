import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAV_ITEMS = ["ME", "About", "Skills", "Projects", "More", "Contact"];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const itemsRef = useRef([]);

  useEffect(() => {
    // FIRST LOAD – jerky falling animation
    gsap.fromTo(
      itemsRef.current,
      {
        y: () => gsap.utils.random(-120, -40),
        rotation: () => gsap.utils.random(-12, 12),
        opacity: 0,
      },
      {
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: {
          each: 0.12,
        },
      }
    );

    // Hide navbar after a few seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    const handleMouseMove = (e) => {
      if (e.clientX < 80) setVisible(true);
      if (e.clientX > 160) setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 h-screen z-50
        flex items-center
        transition-transform duration-500 ease-out
        ${visible ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex flex-col justify-evenly h-full pl-8 py-12">
        {NAV_ITEMS.map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            ref={(el) => (itemsRef.current[index] = el)}
            className="
              handwritten
              text-4xl md:text-5xl
              text-vintage-brown
              hover:text-vintage-blue
              transition-transform duration-300
              hover:scale-110 hover:-rotate-2
              select-none
            "
            style={{
              textShadow: "2px 3px 6px rgba(0,0,0,0.15)",
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
