import React, { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    const canvas = document.getElementById("dustCanvas");
    const ctx = canvas.getContext("2d");

    let w, h;
    const particles = [];
    const NUM = 140;  // more particles → more intensity
    let mouse = { x: 0, y: 0 };

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    // create particles
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

        // 🌀 INTENSE SWIRL
        if (dist < 260) {
          let force = (260 - dist) / 260;
          let angle = Math.atan2(dy, dx);

          // stronger orbit speed
          p.vx += Math.cos(angle + Math.PI / 2) * force * 0.35;
          p.vy += Math.sin(angle + Math.PI / 2) * force * 0.35;
        }

        // ✨ STRONG GLOW
        p.glow = dist < 180 ? 0.55 : 0.15;

        // Faster motion
        p.x += p.vx;
        p.y += p.vy;

        // motion decay
        p.vx *= 0.96;
        p.vy *= 0.96;

        // wrap around edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // draw particle
        ctx.beginPath();
        ctx.fillStyle = `rgba(140, 100, 60, ${p.glow})`; // deep warm ink
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
      id="Hero"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden bg-worn-paper"
    >
      <canvas
        id="dustCanvas"
        className="absolute inset-0 z-0 pointer-events-none"
      ></canvas>

      {/* HERO CONTENT */}
      <div className="text-center relative z-10">

        <div className="flex flex-col items-center justify-center mb-6">
  <h1
    className="
      handwritten 
      text-6xl md:text-8xl 
      text-vintage-brown 
      mb-2 
      animate-nameDrop3D
    "
    style={{ transform: "rotate(-1deg)" }}
  >
    Nukala Vishal
  </h1>

  <p
    className="
      handwritten 
      text-3xl md:text-4xl 
      text-vintage-brown 
      opacity-85 
      -mt-2 
      tracking-wide 
      -rotate-1
      animate-fadeSlideSoft
    "
    style={{ animationDelay: "0.2s" }}
  >
    Full-Stack Artisan of the Web
  </p>
</div>


        
        <div
          className="
            handwritten text-2xl text-vintage-blue mb-6 opacity-0
            animate-fadeSlideSoft
          "
          style={{ animationDelay: "0.4s" }}
        >
          Building Experiences, One Pixel at a Time
        </div>

        <div
          className="
            typewriter text-vintage-brown text-lg max-w-2xl mx-auto leading-relaxed
            bg-vintage-cream p-6 shadow-vintage mb-6 opacity-0
            animate-fadeSlideSoft
          "
          style={{ animationDelay: "0.6s" }}
        >
          “Ideas are easy. Implementation is hard.” — Guy Kawasaki
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-6 py-3 mt-4 bg-vintage-brown text-vintage-cream 
            font-handwritten rounded shadow-vintage border-2 border-dashed 
            hover:bg-vintage-blue hover:text-vintage-cream transition-colors 
            duration-300 opacity-0 animate-fadeSlideSoft
          "
          style={{ animationDelay: "0.8s" }}
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
