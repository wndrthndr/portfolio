import React, { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import gsap from "gsap";
const ContactNote = () => {
  const noteRef = useRef<HTMLDivElement>(null);
  const floatRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Paper enter animation
    gsap.fromTo(
      noteRef.current,
      { y: 24, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Floating background shapes
    floatRefs.current.forEach((el, i) => {
      gsap.to(el, {
        y: () => gsap.utils.random(-20, 20),
        x: () => gsap.utils.random(-15, 15),
        rotation: () => gsap.utils.random(-8, 8),
        duration: gsap.utils.random(6, 10),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.8,
      });
    });
  }, []);

  return (
    <section id="Contact" className="relative py-24 bg-[#fdfaf5] overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) floatRefs.current[i] = el;
            }}
            className="
              absolute
              w-40 h-40
              bg-[#f6d6dd]
              rounded-full
              blur-3xl
              opacity-30
            "
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 lg:px-20 text-center">
        {/* Section Title */}
        <h2 className="font-handwriting text-4xl text-gray-800 mb-4">
          Let’s build something meaningful
        </h2>
        <p className="text-gray-700 font-typewriter mb-14">
          Whether it’s a project, collaboration, or idea — I’d love to hear from you.
        </p>

        {/* Notepaper */}
        <div
          ref={noteRef}
          className="
            relative max-w-lg mx-auto
            bg-[#fffdf5]
            border-2 border-dotted border-gray-300
            shadow-xl
            rounded-sm
            p-9
            font-typewriter
            text-left
          "
          style={{
            backgroundImage:
              "repeating-linear-gradient(#f0ebe1, #f0ebe1 38px, #fffdf5 39px)",
          }}
        >
          {/* Pushpin */}
          <div className="
            absolute -top-3 left-1/2 -translate-x-1/2
            w-5 h-5 rounded-full
            bg-red-500 border-2 border-red-700
            shadow-[0_4px_6px_rgba(0,0,0,0.25)]
          ">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/50 rounded-full" />
          </div>

          {/* Content */}
          <h3 className="italic font-handwriting text-xl text-gray-800 mb-6">
            Contact Me
          </h3>

          <p className="flex items-center gap-3 mb-4 text-gray-900 font-medium">
            <Mail className="w-5 h-5 text-gray-700" />
            <span className="underline decoration-dotted underline-offset-4">
              nukalavishal6@gmail.com
            </span>
          </p>

          <p className="flex items-center gap-3 mb-2 text-gray-700 text-sm">
            <Phone className="w-4 h-4 text-gray-500" />
            +91 9618462331
          </p>

          <p className="flex items-center gap-3 mb-8 text-gray-700 text-sm">
            <MapPin className="w-4 h-4 text-gray-500" />
            Nizamabad, Telangana, India
          </p>

          <p className="italic text-gray-600 mb-3">Find me online:</p>

          <div className="flex gap-4">
            {[Github, Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-full bg-[#f0ebe1]
                  shadow-sm
                  hover:bg-[#f6d6dd]
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                <Icon className="w-5 h-5 text-gray-700" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNote;
