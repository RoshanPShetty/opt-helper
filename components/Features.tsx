"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const optFeatures = [
	{
		id: 1,
		emoji: "📅",
		title: "Deadline Tracker",
		description:
			"Never miss important OPT deadlines with our smart calendar integration.",
		image:
			"https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
		color: "bg-gradient-to-br from-blue-400 to-indigo-400",
	},
	{
		id: 2,
		emoji: "📄",
		title: "Document Checklist",
		description:
			"Keep track of all required documents with our interactive checklist.",
		image:
			"https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
		color: "bg-gradient-to-br from-green-400 to-emerald-400",
	},
	{
		id: 3,
		emoji: "🔔",
		title: "Timely Reminders",
		description:
			"Receive personalized notifications for important OPT milestones.",
		image:
			"https://images.unsplash.com/photo-1644363832001-0876e81f37a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm90aWZpY2F0aW9ufGVufDB8fDB8fHww", // Replace with actual image path
		color: "bg-gradient-to-br from-yellow-400 to-orange-400",
	},
	{
		id: 4,
		emoji: "💼",
		title: "Job Search Tools",
		description:
			"Access curated job listings and resources tailored for OPT students.",
		image:
			"https://images.unsplash.com/photo-1553895501-af9e282e7fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
		color: "bg-gradient-to-br from-purple-400 to-pink-400",
	},
];

export const Features = () => {
	return (
		<section
			className="mx-auto max-w-7xl px-4 py-12 text-slate-800"
			id="features"
		>
			<div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
				<h2 className="max-w-lg text-4xl font-bold md:text-5xl">
					Simplify your OPT journey with our
					<span className="text-blue-600"> all-in-one solution</span>
				</h2>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-blue-700"
				>
					Get Extension
				</motion.button>
			</div>
			<div className="grid grid-cols-12 gap-4">
				{optFeatures.map((feature) => (
					<BounceCard key={feature.id} className="col-span-12 md:col-span-6">
						<CardTitle>
							{feature.title} {feature.emoji}
						</CardTitle>
						<div
							className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] ${feature.color}`}
						>
							<span className="block text-center font-semibold text-white">
								{feature.description}
							</span>
							<div className="mt-4">
								<Image
									src={feature.image}
									alt={feature.title}
									width={200}
									height={200}
									className="w-full h-auto rounded-lg"
								/>
							</div>
						</div>
					</BounceCard>
				))}
			</div>
		</section>
	);
};

const BounceCard = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			whileHover={{ scale: 0.98, rotate: "-1deg" }}
			className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
		>
			{children}
		</motion.div>
	);
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
	return <h3 className="mx-auto text-center text-3xl font-bold">{children}</h3>;
};

export default Features;
