export default function Home() {
  const socialLinks = [
    { name: "GitHub", icon: "github", url: "https://github.com/yourusername", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/yourusername", color: "hover:text-blue-600" },
    { name: "Twitter", icon: "twitter", url: "https://twitter.com/yourusername", color: "hover:text-blue-400" },
    { name: "Email", icon: "email", url: "mailto:your.email@example.com", color: "hover:text-red-500" },
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section with Profile */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-50">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
              </h1>
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300">
                I am a Frontend Developer passionate about accessible UI.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Building beautiful, performant web experiences that make a difference. 
                I love turning complex problems into simple, intuitive designs.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon === "github" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === "twitter" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                    {social.icon === "email" && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - The Big Three */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12">
            Featured Projects
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

        {/* Footer with Social Links */}
        <footer className="text-center text-slate-600 dark:text-slate-400 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${social.color}`}
              >
                {social.name}
              </a>
            ))}
          </div>
          <p className="text-sm">Built with Next.js • Deployed on Vercel</p>
          <p className="text-xs mt-2">© 2026 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
