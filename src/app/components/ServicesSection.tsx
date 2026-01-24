"use client";

import { useState } from "react";

const services = [
  { 
    title: "Data Visualization", 
    description: "Turn your data into clear, actionable insights with interactive dashboards and visual storytelling.", 
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    fullDescription: "I help you transform raw data into compelling visual stories. Whether you need interactive dashboards, publication-ready charts, or custom visualizations, I can guide your projects from concept to completion.",
    helpItems: [
      "You need clear, impactful charts for presentations or reports.",
      "You want to build interactive dashboards for data exploration.",
      "You're seeking guidance on best practices for data visualization."
    ],
    examples: [
      { title: "Interactive Sales Dashboard", desc: "Real-time analytics dashboard for tracking KPIs and trends." },
      { title: "Research Publication Graphics", desc: "Publication-ready visualizations for academic papers." },
      { title: "Custom Data Storytelling", desc: "Narrative-driven visualizations for stakeholder presentations." }
    ]
  },
  { 
    title: "Machine Learning", 
    description: "Uncover patterns and make predictions using advanced machine learning techniques.", 
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    fullDescription: "I help you uncover patterns, make predictions, and turn data into actionable insights using machine learning. From supervised and unsupervised models to reinforcement learning, I can guide your projects from idea to implementation.",
    helpItems: [
      "You need predictive models for business or research applications.",
      "You want to explore your data for hidden patterns or trends.",
      "You're seeking guidance on applying machine learning effectively."
    ],
    examples: [
      { title: "Fraud detection models", desc: "Based on historical transactions." },
      { title: "Predicting nitrate levels", desc: "From image analysis in environmental research." },
      { title: "Pattern recognition models", desc: "For research and business use cases." }
    ]
  },
  { 
    title: "Remote Training", 
    description: "Learn to analyze and visualize your data with hands-on remote training tailored to your needs.", 
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    fullDescription: "I offer remote training sessions to help you or your team analyze and visualize your own data. Whether you're a beginner or looking for advanced techniques, I provide hands-on guidance to get you up and running quickly.",
    helpItems: [
      "You want to learn R, RStudio, Shiny, Git, or RMarkdown.",
      "You want to start visualizing your data independently.",
      "You need customized training for your team's specific needs."
    ],
    examples: [
      { title: "Half-day introduction to R and RStudio", desc: "For beginners." },
      { title: "Interactive dashboard building", desc: "With Shiny." },
      { title: "Custom workshops", desc: "On reproducible workflows and advanced data visualization techniques." }
    ]
  },
];

export default function ServicesSection() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <section id="services" className="mb-20 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          Services
        </h2>
        <div className="w-16 h-1 bg-[#1e3a5f] mx-auto mb-6"></div>
        <p className="text-slate-500 dark:text-slate-400 italic max-w-xl mx-auto">
          Let me help make better use of your data. I offer data visualization, machine learning, and remote training.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.title} 
            className="flex flex-col items-center text-center p-6"
          >
            {/* Circle Icon */}
            <div className="w-24 h-24 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center text-[#1e3a5f] mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] dark:text-[#5a7fa8] mb-3">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
            <button 
              onClick={() => setOpenModal(service.title)}
              className="mt-4 text-slate-400 hover:text-[#1e3a5f] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setOpenModal(null)}>
          <div 
            className="bg-white dark:bg-slate-800 rounded-lg max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {services.filter(s => s.title === openModal).map((service) => (
              <div key={service.title} className="p-8">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center text-[#1e3a5f]">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-slate-900 dark:text-slate-50 text-center mb-4">
                  {service.title}
                </h3>

                {/* Full Description */}
                <p className="text-slate-600 dark:text-slate-300 text-center mb-6 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Divider */}
                <div className="border-t border-slate-200 dark:border-slate-700 my-6"></div>

                {/* I can help you if */}
                <h4 className="text-slate-700 dark:text-slate-300 font-medium mb-4">I can help you if</h4>
                <ul className="space-y-3 mb-6">
                  {service.helpItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <span className="text-[#1e3a5f] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Example projects */}
                <h4 className="text-slate-700 dark:text-slate-300 font-medium mb-4">Example:</h4>
                <ul className="space-y-3">
                  {service.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <span className="text-[#1e3a5f] mt-1">•</span>
                      <span><em className="text-slate-700 dark:text-slate-300">{example.title}</em>: {example.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
