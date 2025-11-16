import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex flex-col gap-2">
        {['ME', 'About', 'Skills', 'Projects', 'More', 'Contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            className="handwritten text-vintage-brown hover:text-vintage-blue transition-colors duration-300 text-lg transform hover:scale-110 hover:-rotate-1 transition-transform"
            style={{
              transform: `rotate(${Math.random() * 4 - 2}deg)`,
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
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