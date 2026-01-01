import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById("dustCanvas");
    const ctx = canvas.getContext("2d");

    let w, h;
    const particles = [];
    const NUM = 140;
    let mouse = { x: 0, y: 0 };

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < NUM; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        glow: 0,
      });
    }

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function draw() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 260) {
          let force = (260 - dist) / 260;
          let angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle + Math.PI / 2) * force * 0.35;
          p.vy += Math.sin(angle + Math.PI / 2) * force * 0.35;
        }

        p.glow = dist < 180 ? 0.55 : 0.15;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.fillStyle = `rgba(140, 100, 60, ${p.glow})`;
        ctx.shadowBlur = p.glow * 45;
        ctx.shadowColor = "rgba(255, 180, 120, 0.9)";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <section
      id="ME"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden bg-worn-paper"
    >
      {/* Dust Canvas */}
      <canvas
        id="dustCanvas"
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center">

        {/* NAME — falling effect retained */}
        <h1
          className="
            font-signature
            text-5xl md:text-7xl
            text-[#6b3f2b]
            tracking-[0.06em]
            mb-4
            origin-top
            opacity-0
            animate-nameDrop3D
          "
        >
          Nukala Vishal
        </h1>

        {/* ROLE */}
        <p
          className="
            font-tech
            text-xl md:text-2xl
            tracking-[0.25em]
            uppercase
            text-gray-700
            mb-6
            opacity-0
            animate-fadeSlideSoft
          "
          style={{ animationDelay: "0.25s" }}
        >
          Software / Web Developer
        </p>

        {/* TAGLINE */}
        <div
          className="
            handwritten text-2xl text-vintage-blue mb-6
            opacity-0 animate-fadeSlideSoft
          "
          style={{ animationDelay: "0.45s" }}
        >
          Building Experiences, One Pixel at a Time
        </div>

        {/* QUOTE */}
        <div
          className="
            text-vintage-brown text-lg max-w-2xl mx-auto
            leading-relaxed bg-vintage-cream p-6 shadow-vintage
            opacity-0 animate-fadeSlideSoft
          "
          style={{ animationDelay: "0.65s" }}
        >
          “Ideas are easy. Implementation is hard.” — Guy Kawasaki
        </div>

        {/* RESUME CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-6 py-3 mt-6
            bg-vintage-brown text-vintage-cream
            font-handwritten rounded shadow-vintage
            border-2 border-dashed
            hover:bg-vintage-blue transition-colors
            opacity-0 animate-fadeSlideSoft
          "
          style={{ animationDelay: "0.85s" }}
        >
          View Resume
        </a>

      </div>
    </section>
  );
};

export default Hero;
