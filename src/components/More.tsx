import React from "react";

const More = () => {
  const scraps = [
    {
      title: "WebDev Intern",
      description: "Building and maintaining websites for Ventura",
    },
    {
      title: "SQL Certification",
      description: "Completed SQL for Data Science on Coursera.",
    },
    {
      title: "AI Automation",
      description: "Built a Telegram bot that delivers daily updates",
    },
  ];

  return (
    <section id="More" className="py-28 bg-white">
      <div className="container mx-auto px-4">

        {/* OUTER FRAME */}
        <div
          className="
            max-w-6xl mx-auto
            bg-vintage-cream
            sketched-border
            shadow-vintage
            p-10 md:p-14
          "
          style={{ transform: "rotate(-0.4deg)" }}
        >
          {/* GRID INSIDE FRAME */}
          <div className="grid grid-cols-4 grid-rows-4 gap-6">

            {/* BIG CONTEXT BLOCK */}
            <div className="col-span-4 row-span-1">
              <h2 className="handwritten text-4xl text-vintage-brown mb-4">
                More Than Just Code
              </h2>
              <p className="typewriter text-vintage-brown text-lg leading-relaxed max-w-3xl">
                Beyond projects, I invest time in strengthening fundamentals,
                automation, and problem solving. These experiences shape how I
                approach engineering, design systems, and write scalable code.
              </p>
            </div>

            {/* WEBDEV INTERN */}
            <div className="col-span-2 row-span-1 border border-vintage-brown/30 p-6">
              <h3 className="handwritten text-2xl text-vintage-brown mb-3">
                {scraps[0].title}
              </h3>
              <p className="typewriter text-vintage-brown opacity-80">
                {scraps[0].description}
              </p>
            </div>

            {/* SQL CERT */}
            <div className="col-span-2 row-span-1 border border-vintage-brown/30 p-6">
              <h3 className="handwritten text-xl text-vintage-brown mb-3">
                {scraps[1].title}
              </h3>
              <p className="typewriter text-vintage-brown opacity-80">
                {scraps[1].description}
              </p>
            </div>

            {/* AI AUTOMATION */}
            <div className="col-span-1 row-span-1 border border-vintage-brown/30 p-6">
              <h3 className="handwritten text-xl text-vintage-brown mb-3">
                {scraps[2].title}
              </h3>
              <p className="typewriter text-vintage-brown opacity-80">
                {scraps[2].description}
              </p>
            </div>

            {/* LEETCODE (ANCHOR) */}
            <a
              href="https://leetcode.com/yourusername"
              target="_blank"
              className="
                col-span-2 row-span-1
                border border-vintage-brown/50
                p-7
                hover:bg-vintage-brown/5
                transition-colors
              "
            >
              <h3 className="handwritten text-2xl text-vintage-brown mb-3">
                LeetCode
              </h3>
              <p className="typewriter text-vintage-brown opacity-80 mb-4">
                Solved 300+ problems across DSA, algorithms, and interview
                patterns.
              </p>
              <span className="text-sm uppercase tracking-widest text-vintage-blue">
                View Profile →
              </span>
            </a>

            {/* GEEKSFORGEEKS (ANCHOR) */}
            <a
              href="https://auth.geeksforgeeks.org/user/yourusername"
              target="_blank"
              className="
                col-span-1 row-span-1
                border border-vintage-brown/50
                p-7
                hover:bg-vintage-brown/5
                transition-colors
              "
            >
              <h3 className="handwritten text-xl text-vintage-brown mb-3">
                GeeksforGeeks
              </h3>
              <p className="typewriter text-vintage-brown opacity-80 mb-4">
                Core DSA and competitive programming practice.
              </p>
              <span className="text-sm uppercase tracking-widest text-vintage-blue">
                View →
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
