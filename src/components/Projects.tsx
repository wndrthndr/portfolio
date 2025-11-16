import React from "react";

const projects = [
  {
    title: "Resume Analyser",
    desc: "An AI-powered tool that evaluates resumes, provides personalized feedback, and suggests improvements to optimize candidate fit",
    tech: ["React", "Gemini API", "Tailwind","Python"],
    link: "https://c-vision-3tpe.vercel.app/",
  },
  {
    title: "AI Code Reviewer",
    desc: "AI-driven platform that detects code issues and guides developers toward best practices",
    tech: ["React", "Node.js", "OpenAI API"],
    link: "#",
  },
  {
    title: "Amazon Product Analyser",
    desc: "Automated Amazon product intelligence tool providing insights and trends at a glance",
    tech: ["Pyhton", "Excel", "Web Scraping"],
    link: "https://github.com/wndrthndr/Amazon-Analyzer",
  },
];

const ProjectsFolders = () => {
  return (
    <section id="Projects" className="py-20 bg-[#f5f0e6]">
      <h2 className="text-center handwritten text-4xl text-[#1e3071] mb-16">
        Project Archive 
      </h2>

      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative bg-vintage-cream border-4 border-vintage-brown shadow-lg rounded-md overflow-hidden group transform-all duration-500 cursor-pointer"
            style={{
              transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
            }}
            
            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = `rotate(${i % 2 === 0 ? -2 : 2}deg)`}
          >
            {/* Folder tab */}
            <div className="bg-vintage-brown text-vintage-cream px-6 py-2 font-mono text-lg shadow-md w-40 -ml-1 rounded-tr-md">
              {project.title}
            </div>

            {/* Folder body (closed look) */}
            <div
              className="p-6 text-vintage-brown text-lg font-serif relative z-10"
              style={{
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
              }}
            >
              <p className="italic opacity-70">Confidential Project — Hover to Open</p>
            </div>

            {/* Hover reveal (slides in like opening a file) */}
            <div className="absolute inset-0 bg-vintage-brown bg-opacity-95 text-vintage-cream p-6 flex flex-col justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10">
              <p className="mb-4">{project.desc}</p>
              <p className="text-sm mb-2 italic">{project.tech.join(" • ")}</p>
              <a
                href={project.link}
                className="underline text-vintage-yellow hover:text-vintage-cream transition-colors"
              >
                Open File →
              </a>
            </div>

            {/* Extra decorative "file tabs" for stacked effect */}
            <div className="absolute top-2 right-6 w-20 h-2 bg-vintage-brown opacity-40 rotate-2"></div>
            <div className="absolute bottom-2 left-6 w-16 h-2 bg-vintage-brown opacity-30 -rotate-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsFolders;
