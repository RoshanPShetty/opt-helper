"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const optCards = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Student studying",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Graduation ceremony",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Job interview",
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1661555144338-093c85f8c588?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Cultural exchange",
	},
	{
		id: 5,
		src: "https://images.unsplash.com/photo-1616428394230-ba242d33e3ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Campus life",
	},
	{
		id: 6,
		src: "https://images.unsplash.com/photo-1620287341401-e2945a4b9daa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "OPT application process",
	},
	{
		id: 7,
		src: "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Work experience",
	},
	{
		id: 8,
		src: "https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldHdvcmtpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
		alt: "Networking event",
	},
	{
		id: 9,
		src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
		alt: "International friendship",
	},
	{
		id: 10,
		src: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "US exploration",
	},
	{
		id: 11,
		src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Language learning",
	},
	{
		id: 12,
		src: "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyZWVyJTIwZmFpcnxlbnwwfHwwfHx8MA%3D%3D",
		alt: "Career fair",
	},
	{
		id: 13,
		src: "https://images.unsplash.com/photo-1553699357-b327e0878f79?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Visa document",
	},
	{
		id: 14,
		src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmd1YWdlJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
		alt: "American culture",
	},
	{
		id: 15,
		src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Technology in education",
	},
	{
		id: 16,
		src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Career fair",
	},
];

const Hero = () => {
	return (
		<div
			className="py-16 lg:pb-24 relative inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_3px),linear-gradient(to_bottom,#80808012_1px,transparent_3px)] bg-[size:24px_24px]"
			id="home"
		>
			<section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
				<div>
					<span className="uppercase mb-4 text-xs md:text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold flex gap-2 items-end">
						OPT Helper{" "}
						<Image
							src="/logo.png"
							alt="OPT Helper logo"
							width={50}
							height={50}
							className="rounded-xl size-8"
						/>
					</span>
					<h3 className="font-serif text-4xl md:text-6xl font-semibold">
						Navigate Your OPT Journey with Confidence
					</h3>
					<p className="text-base md:text-lg text-slate-400 my-4 md:my-6">
						Simplify your Optional Practical Training experience with our
						comprehensive guide and tools.
					</p>
					<div className="flex items-center gap-4">
						<motion.a
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							href="#"
							className="px-10 h-12 n-gradient text-white font-semibold rounded-xl shadow-lg flex gap-2 items-center justify-center"
						>
							<a
								href="https://chromewebstore.google.com/detail/opt-helper-for-internatio/eknpifepgohfcnmbgfalpcalkleohgcm?authuser=0&hl=en"
								target="_blank"
							>
								Install <span className="hidden md:block">Extension</span>
								<Image src="/chrome.svg" alt="chrome" width={20} height={20} />
							</a>
						</motion.a>
						<motion.a
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							href="#features"
							className="px-10 h-12 text-blue-600 font-semibold rounded-xl shadow-lg shadow-blue-100 border border-blue-200 flex gap-2 items-center justify-center"
						>
							Learn More
							<FaArrowDown className="size-4" />
						</motion.a>
					</div>
				</div>
				<OPTGrid />
			</section>
		</div>
	);
};

const shuffle = (array: any) => {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

const generateCards = () => {
	return shuffle(optCards).map((card: any) => (
		<motion.div
			key={card.id}
			layout
			transition={{ duration: 1.5, type: "spring" }}
			className="w-full h-full rounded-xl overflow-hidden"
		>
			<Image
				src={card.src}
				alt={card.alt}
				width={200}
				height={200}
				className="w-full h-full object-cover"
			/>
		</motion.div>
	));
};

const OPTGrid = () => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const [cards, setCards] = useState(generateCards());

	useEffect(() => {
		shuffleCards();

		return () => clearTimeout(timeoutRef.current ?? undefined);
	}, []);

	const shuffleCards = () => {
		setCards(generateCards());

		timeoutRef.current = setTimeout(shuffleCards, 3000);
	};

	return (
		<div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
			{cards.map((card: any) => card)}
		</div>
	);
};

export default Hero;
