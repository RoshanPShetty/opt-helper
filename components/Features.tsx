"use client";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Set this to your important OPT deadline
const OPT_DEADLINE = "2024-09-14";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const BounceCard = ({
	className,
	children,
}: {
	className: string;
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			whileHover={{ scale: 0.95, rotate: "-1deg" }}
			className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl   p-8 ${className}`}
		>
			{children}
		</motion.div>
	);
};

const CountdownItem = ({ unit, text }: { unit: string; text: string }) => {
	const { ref, time } = useTimer(unit);

	return (
		<div className="flex flex-col items-center justify-center gap-1">
			<div className="relative w-full overflow-hidden text-center">
				<span ref={ref} className="block text-2xl font-medium text-white">
					{time}
				</span>
			</div>
			<span className="text-xs font-light text-indigo-200">{text}</span>
		</div>
	);
};

const useTimer = (unit: string) => {
	const [ref, animate] = useAnimate();
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const timeRef = useRef(0);
	const [time, setTime] = useState(0);

	useEffect(() => {
		intervalRef.current = setInterval(handleCountdown, 1000);
		return () => clearInterval(intervalRef.current || undefined);
	}, []);

	const handleCountdown = async () => {
		const end = new Date(OPT_DEADLINE);
		const now = new Date();
		const distance = +end - +now;

		let newTime = 0;

		if (unit === "Day") {
			newTime = Math.floor(distance / DAY);
		} else if (unit === "Hour") {
			newTime = Math.floor((distance % DAY) / HOUR);
		} else if (unit === "Minute") {
			newTime = Math.floor((distance % HOUR) / MINUTE);
		} else {
			newTime = Math.floor((distance % MINUTE) / SECOND);
		}

		if (newTime !== timeRef.current) {
			await animate(
				ref.current,
				{ y: ["0%", "-50%"], opacity: [1, 0] },
				{ duration: 0.35 }
			);

			timeRef.current = newTime;
			setTime(newTime);

			await animate(
				ref.current,
				{ y: ["50%", "0%"], opacity: [0, 1] },
				{ duration: 0.35 }
			);
		}
	};

	return { ref, time };
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<h3 className="font-serif mx-auto text-center text-3xl font-semibold">
			{children}
		</h3>
	);
};

const Features = () => {
	const [isSelected, setSelected] = useState(false);

	return (
		<div className="py-16 container" id="features">
			<div className="flex justify-center">
				<p className="uppercase font-semibold tracking-widest n-gradient text-transparent bg-clip-text">
					Real-World Impact
				</p>
			</div>
			<h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-6">
				Highlighted Features
			</h2>

			<p className="text-center md:text-lg lg:text-xl mt-4 mx-auto">
				Simplify your OPT journey with our{" "}
				<strong className="font-semibold n-gradient text-transparent bg-clip-text">
					all-in-one solution
				</strong>
			</p>
			<section className="mx-auto max-w-7xl px-4 py-12">
				<div className="mb-4 grid grid-cols-12 gap-4">
					<BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
						<CardTitle>Deadline & Application Tracker 📅</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-black/80 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-indigo-50 uppercase mb-4">
								Time Remaining to OPT Deadline
							</span>
							<div className="flex justify-between mx-4">
								<CountdownItem unit="Day" text="days" />
								<CountdownItem unit="Hour" text="hours" />
								<CountdownItem unit="Minute" text="minutes" />
								<CountdownItem unit="Second" text="seconds" />
							</div>
						</div>
					</BounceCard>
					<BounceCard className="col-span-12 md:col-span-8 bg-black text-white">
						<CardTitle>Document Checklist 📄</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-orange-50 uppercase">
								Manage required documents.
							</span>
							<Image
								src="https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="checklist"
								width={1920}
								height={1080}
								className="mt-4 w-full h-full object-cover rounded-t-2xl"
							/>
						</div>
					</BounceCard>
				</div>
				<div className="grid grid-cols-12 gap-4">
					<BounceCard className="col-span-12 md:col-span-8 bg-black text-white">
						<CardTitle>Information Hub</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-red-800 to-red-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-emerald-50 uppercase">
								Access OPT/STEM OPT Info, USCIS guidelines, FAQs, and Resources.
							</span>
							<Image
								src="https://images.pexels.com/photos/19783681/pexels-photo-19783681/free-photo-of-wood-writing-typography-tiles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="laptop"
								width={1920}
								height={1080}
								className="mt-4 w-full h-full object-cover rounded-t-2xl"
							/>
						</div>
					</BounceCard>

					<a
						href="https://chromewebstore.google.com/detail/opt-helper-for-internatio/eknpifepgohfcnmbgfalpcalkleohgcm?authuser=0&hl=en"
						target="_blank"
					>
						<BounceCard className="col-span-12 md:col-span-4 n-gradient text-white">
							<CardTitle>One-Click Installation</CardTitle>
							<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-black/80 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
								<span className="block text-center font-semibold text-red-50 uppercase">
									Quick setup via Chrome Store.
								</span>
								<Image
									src="/chrome.svg"
									alt="chrome"
									width={1920}
									height={1080}
									className="mt-4 w-full h-2/3"
								/>
							</div>
						</BounceCard>
					</a>
				</div>
			</section>
		</div>
	);
};

export default Features;
