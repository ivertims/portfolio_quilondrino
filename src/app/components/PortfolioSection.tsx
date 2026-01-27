"use client";
import React, { useState } from "react";
import Image from "next/image";

const projects = [
	{
		title: "Customer Purchase Behavior EDA",
		category: "Data Visualization",
		description:
			"An exploratory data analysis of customer purchasing patterns and trends visualized through a Tableau dashboard.",
		tech: ["Tableau", "Data Analysis", "EDA"],
		image: "/images/dataset-cover.png",
		link: "https://public.tableau.com/views/CustomerPurchaseBehaviorEDA_17694292889430/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
		demo: "https://public.tableau.com/views/CustomerPurchaseBehaviorEDA_17694292889430/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
	},
	{
		title: "Global Energy and CO2 Emissions",
		category: "Data Visualization",
		description:
			"Exploratory analysis of energy production, consumption, and CO2 emissions trends from 1980 to 2019.",
		tech: ["Tableau", "Data Analysis", "Climate Data"],
		image: "/images/datasetcover.png",
		link: "https://public.tableau.com/views/EnergyconsumptionproductionandCO2emissionsfrom1980to2019_/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
		demo: "https://public.tableau.com/views/EnergyconsumptionproductionandCO2emissionsfrom1980to2019_/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
	},
	{
		title: "California Wildfire Analysis",
		category: "Data Visualization",
		description:
			"A detailed visualization and analysis of California wildfire patterns, impact, and historical trends.",
		tech: ["Tableau", "Data Analysis", "Spatial Correlation"],
		image: "/images/datasetcover2.png",
		link: "https://public.tableau.com/views/CaliforniaWildfireAnalysis_17400341836000/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
		demo: "https://public.tableau.com/views/CaliforniaWildfireAnalysis_17400341836000/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
	},
	{
		title: "Finish Times Distribution",
		category: "Data Visualization",
		description:
			"Statistical analysis and visualization of marathon finish times.",
		tech: ["Python", "Matplotlib", "Pandas"],
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
		link: "#",
		demo: "#",
	},
	{
		title: "KNMI Data Centre",
		category: "Web Development",
		description:
			"Data portal for access to weather, climate, and seismological data.",
		tech: ["Next.js", "GraphQL", "PostgreSQL"],
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
		link: "#",
		demo: "#",
	},
	{
		title: "Sentiment Analysis",
		category: "Machine Learning",
		description: "NLP model to analyze social media sentiment in real-time.",
		tech: ["Python", "TensorFlow", "FastAPI"],
		image:
			"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
		link: "#",
		demo: "#",
	},
];

const categories = [
	"Show all",
	"Data Visualization",
	"Machine Learning",
	"Web Development",
];

export default function PortfolioSection() {
	const [activeCategory, setActiveCategory] = useState("Show all");

	const filteredProjects =
		activeCategory === "Show all"
			? projects
			: projects.filter((project) => project.category === activeCategory);

	return (
		<section
			id="portfolio"
			className="py-20 scroll-mt-24"
		>
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
						Portfolio
					</h2>
					<div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
				</div>

				{/* Filter Bar */}
				<div className="flex flex-wrap justify-center gap-8 mb-16">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`text-lg font-medium transition-all duration-300 pb-1 ${activeCategory === category
								? "text-slate-800 dark:text-white border-b-2 border-blue-500"
								: "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white border-b-2 border-transparent hover:border-slate-300"
								}`}
						>
							{category === "Show all"
								? "Show all"
								: category === "Data Visualization"
									? "data viz"
									: category.toLowerCase()}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project, index) => (
						<div
							key={index}
							className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col"
						>
							<div className="relative h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="px-6 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 font-bold text-sm uppercase tracking-wide shadow-lg"
									>
										View
									</a>
								</div>
							</div>

							<div className="p-6 flex-grow flex flex-col">
								<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
									{project.description}
								</p>
								<div className="mt-auto flex flex-wrap gap-2">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-700 dark:text-slate-300 px-2 py-1 rounded"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
