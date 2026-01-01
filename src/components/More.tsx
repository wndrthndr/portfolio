import React from "react";

const More = () => {
  return (
    <section id="More" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* LEFT MAIN COLUMN */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* TOP LARGE BOX */}
            <div className="bg-vintage-cream sketched-border shadow-vintage p-10">
              <h2 className="handwritten text-4xl text-vintage-brown mb-6 -rotate-1">
                More Than Just Projects
              </h2>

              <p className="typewriter text-vintage-brown text-lg leading-relaxed max-w-xl">
                Beyond building applications, I actively sharpen my problem-solving skills
                and contribute to open-source. These platforms reflect consistency,
                discipline, and curiosity — qualities I bring into real-world engineering.
              </p>
            </div>

            {/* BOTTOM TWO BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="
                  bg-vintage-cream sketched-border shadow-vintage p-8
                  hover:-translate-y-1 transition-transform duration-300
                "
              >
                <h3 className="handwritten text-2xl text-vintage-brown mb-4">
                  GitHub
                </h3>

                <p className="typewriter text-vintage-brown opacity-80 mb-6">
                  Open-source work, side projects, experiments, and production-ready code.
                </p>

                <span className="text-sm uppercase tracking-widest text-vintage-blue">
                  View Repositories →
                </span>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/yourusername"
                target="_blank"
                className="
                  bg-vintage-cream sketched-border shadow-vintage p-8
                  hover:-translate-y-1 transition-transform duration-300
                "
              >
                <h3 className="handwritten text-2xl text-vintage-brown mb-4">
                  LeetCode
                </h3>

                <p className="typewriter text-vintage-brown opacity-80 mb-6">
                  300+ problems solved across DSA, algorithms, and system thinking.
                </p>

                <span className="text-sm uppercase tracking-widest text-vintage-blue">
                  View Profile →
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT TALL BLOCKS (Optional / Future Use) */}
          <div className="hidden lg:block bg-vintage-cream sketched-border shadow-vintage"></div>
          <div className="hidden lg:block bg-vintage-cream sketched-border shadow-vintage"></div>

        </div>
      </div>
    </section>
  );
};

export default More;
