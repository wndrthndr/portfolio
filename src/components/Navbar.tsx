import React, { useEffect, useState } from "react";

const NAV_ITEMS = ["ME", "About", "Skills", "Projects", "More", "Contact"];

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide after initial delay
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    const handleMouseMove = (e) => {
      // If cursor is near left edge → show navbar
      if (e.clientX < 580) {
        setVisible(true);
      } else if (e.clientX > 160) 
        setVisible(false);
      }
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
      <div className="flex flex-col justify-evenly h-full pl-6 py-10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="
              handwritten
              text-vintage-brown
              hover:text-vintage-blue
              text-lg
              transition-all duration-300
              hover:scale-110 hover:-rotate-1
            "
            style={{
              transform: `rotate(${Math.random() * 4 - 2}deg)`,
              textShadow: "1px 1px 2px rgba(0,0,0,0.12)",
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
