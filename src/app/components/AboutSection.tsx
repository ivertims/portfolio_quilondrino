"use client";
import Image from "next/image";

interface AboutSectionProps {
  onImageClick: () => void;
}

export default function AboutSection({ onImageClick }: AboutSectionProps) {
  return (
    <section id="about" className="mb-20 scroll-mt-24">
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Profile Image - Rectangle style */}
        <div className="relative group flex-shrink-0 w-full md:w-64">
          <div
            className="w-full aspect-[3/4] overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 cursor-pointer border border-slate-300 dark:border-slate-700 rounded-2xl"
            onClick={onImageClick}
          >
            <Image
              src="/images/profilepic.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
              width={400}
              height={533}
              priority
            />
          </div>
        </div>

        {/* About Text */}
        <div className="flex-1">
          <h2 className="text-2xl text-slate-800 dark:text-slate-200 mb-6">
            Hi, I&apos;m Iver.
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
            I specialize in helping companies and researchers analyze and visualize their datasets. I excel in <span className="font-bold text-slate-900 dark:text-slate-50">data visualization</span>, with a strong focus on clarity and impact. If you&apos;re looking for guidance on presenting your results, building complex interactive charts, or leveraging <span className="font-bold text-slate-900 dark:text-slate-50">machine learning</span> to uncover patterns and insights, I&apos;m the expert you&apos;re seeking.
          </p>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
            I believe data is only powerful when it helps people understand, make informed decisions, and take meaningful action. My goal is to turn complexity into insights that are accurate, clear, and genuinely useful, whether through visualization, statistical analysis, or machine learning.
          </p>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            With a solid track record in data science, I&apos;ve collaborated with prestigious research institutes like the <a href="https://www.urios.edu.ph/" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] dark:text-[#5a7fa8] hover:underline">Father Saturnino Urios University</a> and private companies.
          </p>
        </div>
      </div>
    </section>
  );
}
