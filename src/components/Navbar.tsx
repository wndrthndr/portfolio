import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAV_ITEMS = ["ME", "About", "Skills", "Projects", "More", "Contact"];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    // Window-pane stacking animation
    gsap.fromTo(
      itemsRef.current,
      {
        y: (i) => -80 - i * 18,     // each starts slightly higher than the next
        rotation: () => gsap.utils.random(-4, 4),
        opacity: 0,
      },
      {
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: {
          each: 0.14,
        },
      }
    );

    // Auto-hide after first impression
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3200);

    const handleMouseMove = (e: MouseEvent) => {
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
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className="
              handwritten
              text-2xl md:text-3xl
              text-vintage-brown
              hover:text-vintage-blue
              transition-transform duration-300
              hover:scale-[1.06] hover:-rotate-1
              select-none
            "
            style={{
              textShadow: "1px 2px 4px rgba(0,0,0,0.14)",
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
