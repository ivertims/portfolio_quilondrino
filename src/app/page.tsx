"use client";

import { useState, useEffect, useRef } from "react";

// Particle Network Background Component
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(156, 163, 175, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(156, 163, 175, 0.6)";
        ctx.fill();
      });
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
    };

    const animate = () => {
      drawParticles();
      updateParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

export default function Home() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "PORTFOLIO", id: "portfolio" },
    { name: "CONTACTS", id: "contacts" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "github", url: "https://github.com/ivertims", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/yourusername", color: "hover:text-blue-600" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/iverdeen.quilondrino", color: "hover:text-blue-600" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/iver.quil/", color: "hover:text-pink-500" },
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
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name with Profile Picture */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                <img
                  src="/images/pic2.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-slate-900 dark:text-white tracking-wide">
                IVER QUILONDRINO
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === link.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600 dark:text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section with Profile */}
        <section id="home" className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => setIsImageOpen(true)}
              >
                <img
                  src="/images/profilepic.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Click hint */}
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  Click to view
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-50">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Iver</span>
              </h1>
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300">
                I'm a Full-Stack Data Engineer who builds scalable applications and end-to-end data solutions.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                I focus on transforming raw data into meaningful insights through well-designed systems, 
                accessible interfaces, and modern web technologies. I enjoy solving real-world problems 
                by combining engineering, analytics, and continuous learning.
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
                    {social.icon === "facebook" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12">
            About Me
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I'm a passionate Full-Stack Data Engineer with a strong foundation in building scalable applications 
              and end-to-end data solutions. My journey in tech started with curiosity and has grown into 
              a deep commitment to creating meaningful digital experiences.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in transforming raw data into actionable insights through well-designed systems, 
              intuitive interfaces, and modern web technologies. I'm always eager to learn new skills and 
              take on challenging projects that push my boundaries.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Web Development", description: "Building responsive and modern web applications using React, Next.js, and other cutting-edge technologies.", icon: "🌐" },
              { title: "Data Engineering", description: "Designing and implementing data pipelines, ETL processes, and database solutions for scalable data infrastructure.", icon: "📊" },
              { title: "UI/UX Design", description: "Creating intuitive and visually appealing user interfaces with a focus on user experience.", icon: "🎨" },
            ].map((service) => (
              <div key={service.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="mb-20">
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

        {/* Contact Section */}
        <section id="contacts" className="mb-20 py-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-8 text-center">
            CONTACT
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Feel free to contact me for any question. For open source projects, please open an issue or pull
              request on <a href="https://github.com/ivertims" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Github</a>. 
              If you want to follow my work, reach me on <a href="https://www.facebook.com/iverdeen.quilondrino" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Facebook</a>. 
              Otherwise, send me an email at <a href="mailto:iver.quilondrino@gmail.com" className="text-slate-900 dark:text-slate-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">iver.quilondrino@gmail.com</a>.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/ivertims"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/iverdeen.quilondrino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/iver.quil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="mailto:iver.quilondrino@gmail.com"
                className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-600 dark:text-slate-400 pt-12 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm">Built with Next.js • Deployed on Vercel</p>
          <p className="text-xs mt-2">© 2026 Iver Quilondrino. All rights reserved.</p>
        </footer>
      </div>

      {/* Image Modal */}
      {isImageOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <span>Close</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="/images/profilepic.png"
              alt="Profile Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
