import React from "react";

const More = () => {
  return (
    <section id="More" className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT CONTENT STACK */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            {/* TOP LARGE CONTEXT BLOCK */}
            <div
              className="
                bg-vintage-cream sketched-border shadow-vintage
                p-10 md:p-12
              "
              style={{ transform: "rotate(-0.6deg)" }}
            >
              <h2 className="handwritten text-4xl text-vintage-brown mb-6">
                Beyond Projects
              </h2>

              <p className="typewriter text-vintage-brown text-lg leading-relaxed max-w-xl">
                Coding for me extends beyond building applications. I actively
                practice problem solving and algorithmic thinking to sharpen
                fundamentals, improve system-level reasoning, and write better
                production code.
              </p>
            </div>

            {/* BOTTOM ASYMMETRIC ROW */}
            <div className="flex flex-col sm:flex-row gap-6">

              {/* LeetCode — larger */}
              <a
                href="https://leetcode.com/yourusername"
                target="_blank"
                className="
                  flex-1 bg-vintage-cream sketched-border shadow-vintage
                  p-8
                  hover:-translate-y-1 transition-transform duration-300
                "
                style={{ transform: "rotate(0.8deg)" }}
              >
                <h3 className="handwritten text-2xl text-vintage-brown mb-3">
                  LeetCode
                </h3>

                <p className="typewriter text-vintage-brown opacity-80 mb-4">
                  Solved 300+ problems across data structures, algorithms, and
                  problem patterns.
                </p>

                <span className="text-sm uppercase tracking-widest text-vintage-blue">
                  View Profile →
                </span>
              </a>

              {/* GeeksforGeeks — slightly smaller */}
              <a
                href="https://auth.geeksforgeeks.org/user/yourusername"
                target="_blank"
                className="
                  flex-[0.85] bg-vintage-cream sketched-border shadow-vintage
                  p-7
                  hover:-translate-y-1 transition-transform duration-300
                "
                style={{ transform: "rotate(-0.4deg)" }}
              >
                <h3 className="handwritten text-xl text-vintage-brown mb-3">
                  GeeksforGeeks
                </h3>

                <p className="typewriter text-vintage-brown opacity-80 mb-4">
                  Practiced core DSA concepts and competitive programming
                  fundamentals.
                </p>

                <span className="text-sm uppercase tracking-widest text-vintage-blue">
                  View Profile →
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT TALL ASYMMETRIC BLOCK */}
          <div
            className="
              hidden lg:block lg:col-span-2
              bg-vintage-cream sketched-border shadow-vintage
            "
            style={{ transform: "rotate(0.4deg)" }}
          >
            {/* intentionally empty — visual counterweight */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default More;
