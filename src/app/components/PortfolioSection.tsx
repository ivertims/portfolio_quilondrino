"use client";

const projects = [
  {
    title: "Project Alpha",
    category: "What I Know",
    description: "A full-stack web application demonstrating my core skills in React, Node.js, and database management.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "https://github.com/yourusername/project-alpha",
    demo: "https://project-alpha-demo.vercel.app",
  },
  {
    title: "Project Beta",
    category: "What I Learned",
    description: "An experimental project where I dove into TypeScript and Next.js, learning server-side rendering and API routes.",
    tech: ["Next.js", "TypeScript", "API Routes", "Vercel"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    link: "https://github.com/yourusername/project-beta",
    demo: "https://project-beta-demo.vercel.app",
  },
  {
    title: "Project Gamma",
    category: "What I'm Aspiring To",
    description: "A work-in-progress exploring AI integration, real-time features, and advanced state management patterns.",
    tech: ["React", "WebSockets", "AI/ML", "Redis"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    link: "https://github.com/yourusername/project-gamma",
    demo: "https://project-gamma-demo.vercel.app",
  },
];

const learningTopics = [
  "Advanced TypeScript Patterns",
  "System Design & Architecture",
  "Web Performance Optimization",
  "Cloud Infrastructure (AWS/Azure)",
];

export default function PortfolioSection() {
  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="mb-20 scroll-mt-24">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12">
          Portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Currently Learning</h2>
          <p className="text-lg mb-8 text-blue-50">
            Always growing, always exploring new technologies and concepts.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6 text-yellow-300 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-lg font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
