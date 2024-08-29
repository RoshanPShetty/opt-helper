"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { header } from "@/data";

const Header = () => {
	const [activeItem, setActiveItem] = useState(header[0].title);

	useEffect(() => {
		const sectionIds = header.map((item) => item.path.substring(1)); // Extract IDs

		const sections = sectionIds.map((id) => document.getElementById(id));

		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.2,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id;
					console.log(`Intersecting: ${id}`); // Debugging line
					setActiveItem(
						header.find((item) => item.path.substring(1) === id)?.title ||
							header[0].title
					);
				}
			});
		}, observerOptions);

		if (sections) {
			sections.forEach((section) => {
				if (section) {
					observer.observe(section);
				}
			});
		}

		return () => {
			if (sections) {
				sections.forEach((section) => {
					if (section) {
						observer.unobserve(section);
					}
				});
			}
		};
	}, [header]);

	return (
		<div className="flex items-center justify-center fixed top-3 lg:top-5 w-full z-20">
			<nav className="relative flex gap-1 border p-0.5 lg:p-2 border-white/15 rounded-full n-gradient backdrop-blur">
				{header.map((item) => (
					<div
						key={item.title}
						className="relative flex items-center justify-center"
						onClick={() => setActiveItem(item.title)}
					>
						{activeItem === item.title && (
							<motion.span
								layoutId="bubble"
								className="bg-white text-black absolute inset-0 bg-gradient-to-r rounded-full -z-0"
								transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
							/>
						)}
						<a
							href={item.path}
							className={`relative rounded-full px-3 py-1.5 text-sm font-medium text-white transition-colors duration-300 ${
                                activeItem === item.title
                                ? "backdrop-blur bg-white/30" // Active item styling
									: "hover:text-white/60"
							} z-10`}
							style={{ zIndex: 1 }}
						>
							{item.title}
						</a>
					</div>
				))}
			</nav>
		</div>
	);
};

export default Header;
