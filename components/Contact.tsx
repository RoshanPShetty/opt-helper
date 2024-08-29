"use client";
import { socials } from "@/data";
import ArrowUpRight from "../public/arrow-up-right.svg";

const Contact = () => {
	return (
		<div
			className="py-16 lg:pb-24 relative inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_3px),linear-gradient(to_bottom,#80808012_1px,transparent_3px)] bg-[size:24px_24px]"
			id="contact"
		>
			<div className="container rounded-2xl row-span-3 n-gradient text-black overflow-hidden">
				<div className="lg:grid lg:grid-cols-5 lg:py-4 sm:items-center sm:justify-center sm:flex sm:flex-col sm:px-8">
					<div className="lg:col-span-4 text-white">
						<p className="font-serif pt-4 mb-0 text-2xl lg:text-3xl tracking-wide">
							Have a feature request?
						</p>
						<p className="pt-4 mb-4 font-medium text-sm lg:text-lg">
							Help us enhance Spotify Shuffler — Your feedback is valuable!
						</p>
					</div>
					<div className="lg:col-span-1 lg:items-end lg:justify-end sm:pb-4">
						<a
							href="mailto:roshanshetty2000@gmail.com"
							className="bg-black text-white rounded-xl text-lg px-8 py-3 inline-flex items-center gap-4"
						>
							<span>Contact Us</span> <ArrowUpRight className="size-6" />
						</a>
					</div>
				</div>
			</div>

			<div className="container border-t border-t-white/30 mt-16 pt-8">
				<div className="flex justify-between items-center">
					<p className="">
						Created by{" "}
						<a
							href="https://x.com/roshanpshetty"
							target="_blank"
							className="font-semibold"
						>
							@roshanpshetty
						</a>
					</p>
					<div className="flex gap-8 sm:mt-4 md:mt-0 lg:mt-0  sm:hidden lg:block ">
						{socials.map((social) => (
							<a
								href={social.link}
								target="_blank"
								key={social.id}
								className="ml-4"
							>
								{social.name} <ArrowUpRight className="size-5 inline-flex" />
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
