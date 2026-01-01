import React from "react";

const More = () => {
  return (
    <section id="More" className="py-28 bg-white">
      <div className="container mx-auto px-4">

        {/* PANEL GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-4
            auto-rows-fr
            gap-6
            max-w-7xl mx-auto
          "
        >
          {/* TOP WIDE PANEL */}
          <div className="lg:col-span-2 border border-vintage-brown/40 p-10">
            <h2 className="handwritten text-4xl text-vintage-brown mb-4">
              More Than Just Code
            </h2>
            <p className="typewriter text-vintage-brown text-lg leading-relaxed max-w-xl">
              Beyond projects, I continuously invest time in problem solving,
              certifications, and automation. These experiences strengthen my
              fundamentals and shape how I design real-world systems.
            </p>
          </div>

          {/* RIGHT PANEL 1 */}
          <div className="border border-vintage-brown/40 p-8">
            <h3 className="handwritten text-2xl text-vintage-brown mb-3">
              WebDev Intern
            </h3>
            <p className="typewriter text-vintage-brown opacity-80">
              Building and maintaining websites for Ventura.
            </p>
          </div>

          {/* RIGHT PANEL 2 */}
          <div className="border border-vintage-brown/40 p-8">
            <h3 className="handwritten text-xl text-vintage-brown mb-3">
              SQL Certification
            </h3>
            <p className="typewriter text-vintage-brown opacity-80">
              SQL for Data Science — Coursera.
            </p>
          </div>

          {/* BOTTOM LEFT — LEETCODE */}
          <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            className="
              border border-vintage-brown/60
              p-10
              hover:bg-vintage-brown/5
              transition-colors
            "
          >
            <h3 className="handwritten text-2xl text-vintage-brown mb-4">
              LeetCode
            </h3>
            <p className="typewriter text-vintage-brown opacity-80">
              Solved 300+ problems across DSA and algorithmic patterns.
            </p>
          </a>

          {/* BOTTOM CENTER — GEEKSFORGEEKS */}
          <a
            href="https://auth.geeksforgeeks.org/user/yourusername"
            target="_blank"
            className="
              border border-vintage-brown/60
              p-10
              hover:bg-vintage-brown/5
              transition-colors
            "
          >
            <h3 className="handwritten text-2xl text-vintage-brown mb-4">
              GeeksforGeeks
            </h3>
            <p className="typewriter text-vintage-brown opacity-80">
              Core DSA practice and competitive programming fundamentals.
            </p>
          </a>

          {/* OPTIONAL / FUTURE PANEL */}
          <div className="border border-vintage-brown/40 p-8">
            <h3 className="handwritten text-xl text-vintage-brown mb-3">
              AI Automation
            </h3>
            <p className="typewriter text-vintage-brown opacity-80">
              Built Telegram bots and automation workflows.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default More;
