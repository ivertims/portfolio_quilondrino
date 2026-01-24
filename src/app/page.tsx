"use client";

import { useState, useEffect, useRef } from "react";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactsSection from "./components/ContactsSection";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 relative">
      {/* Animated Geometric Network Background */}
      <div className="fixed inset-0 z-0">
        <ParticleNetwork />
      </div>

      {/* Navigation Header - Always visible */}
      <header 
        className="bg-slate-900 shadow-lg"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 9999,
          width: '100%'
        }}
      >
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
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveSection(link.id);
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === link.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
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

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        {/* HOME Section */}
        <HomeSection socialLinks={socialLinks} />

        {/* ABOUT Section */}
        <AboutSection onImageClick={() => setIsImageOpen(true)} />

        {/* SERVICES Section */}
        <ServicesSection />

        {/* PORTFOLIO Section */}
        <PortfolioSection />

        {/* CONTACTS Section */}
        <ContactsSection />

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
