import React from "react";

const More = () => {
  const scraps = [
    {
      title: "WebDev Intern",
      description: "Building and maintaining websites for Ventura",
      rotation: -2,
    },
    {
      title: "SQL Certification",
      description: "Completed SQL for Data Science on Coursera.",
      rotation: 3,
    },
    {
      title: "AI Automation",
      description: "Built a Telegram bot that delivers daily updates",
      rotation: 2,
    },
  ];

  return (
    <section id="More" className="py-28 bg-white">
      <div className="container mx-auto px-4">

        {/* TOP ASYMMETRIC ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">

          {/* BIG CONTEXT BLOCK */}
          <div
            className="
              lg:col-span-3
              bg-vintage-cream sketched-border shadow-vintage
              p-12
            "
            style={{ transform: "rotate(-0.6deg)" }}
          >
            <h2 className="handwritten text-4xl text-vintage-brown mb-6">
              More Than Just Code
            </h2>

            <p className="typewriter text-vintage-brown text-lg leading-relaxed max-w-xl">
              Alongside building full-stack applications, I continuously invest
              time in strengthening fundamentals, exploring automation, and
              learning through real-world problem solving. These experiences
              shape how I think, design, and engineer solutions.
            </p>
          </div>

          {/* TALL EMPTY COUNTERWEIGHT */}
          <div
            className="
              hidden lg:block lg:col-span-2
              bg-vintage-cream sketched-border shadow-vintage
            "
            style={{ transform: "rotate(0.4deg)" }}
          />
        </div>

        {/* FLOATING SCRAPS */}
        <div className="relative mb-20">

          <div className="flex flex-wrap gap-6 max-w-5xl">
            {scraps.map((scrap, i) => (
              <div
                key={i}
                className="
                  bg-vintage-cream sketched-border shadow-vintage
                  p-7
                  max-w-sm
                "
                style={{
                  transform: `rotate(${scrap.rotation}deg)`,
                }}
              >
                <h3 className="handwritten text-2xl text-vintage-brown mb-3">
                  {scrap.title}
                </h3>

                <p className="typewriter text-vintage-brown opacity-80 leading-relaxed">
                  {scrap.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM ANCHORED ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

          {/* LeetCode */}
          <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            className="
              bg-vintage-cream sketched-border shadow-vintage
              p-9
              hover:-translate-y-1 transition-transform duration-300
            "
            style={{ transform: "rotate(-0.3deg)" }}
          >
            <h3 className="handwritten text-2xl text-vintage-brown mb-4">
              LeetCode
            </h3>

            <p className="typewriter text-vintage-brown opacity-80 mb-5">
              Solved 300+ problems covering data structures, algorithms,
              and common interview patterns.
            </p>

            <span className="text-sm uppercase tracking-widest text-vintage-blue">
              View Profile →
            </span>
          </a>

          {/* GeeksforGeeks */}
          <a
            href="https://auth.geeksforgeeks.org/user/yourusername"
            target="_blank"
            className="
              bg-vintage-cream sketched-border shadow-vintage
              p-8
              hover:-translate-y-1 transition-transform duration-300
            "
            style={{ transform: "rotate(0.6deg)" }}
          >
            <h3 className="handwritten text-xl text-vintage-brown mb-4">
              GeeksforGeeks
            </h3>

            <p className="typewriter text-vintage-brown opacity-80 mb-5">
              Practiced core DSA concepts and competitive programming
              fundamentals.
            </p>

            <span className="text-sm uppercase tracking-widest text-vintage-blue">
              View Profile →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default More;
