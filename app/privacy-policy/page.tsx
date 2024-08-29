"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
			},
		},
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
			<motion.div
				className="container mx-auto px-4 max-w-3xl bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.h1
					className="text-4xl font-bold mb-8 text-center"
					variants={itemVariants}
				>
					Privacy Policy for OPT Helper Chrome Extension
				</motion.h1>

				<Section title="1. Introduction" variants={itemVariants}>
					<p>
						This Privacy Policy explains how the OPT Helper Chrome Extension
						(&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
						and protects your information when you use our extension.
					</p>
				</Section>

				<Section title="2. Information We Collect" variants={itemVariants}>
					<p className="mb-4">
						Our extension collects and stores the following information locally
						on your device:
					</p>
					<ul className="list-disc pl-6 mb-4">
						<li>OPT application dates and deadlines</li>
						<li>Document checklist status</li>
						<li>Employment information related to your OPT</li>
					</ul>
					<p>
						We do not transmit or store this information on our servers. All
						data remains on your local device.
					</p>
				</Section>

				<Section title="3. How We Use Your Information" variants={itemVariants}>
					<p>
						The information collected is used solely to provide you with
						OPT-related services within the extension, such as deadline
						reminders and document management.
					</p>
				</Section>

				<Section title="4. Data Security" variants={itemVariants}>
					<p>
						We implement security measures to protect your information. However,
						as the data is stored locally on your device, please ensure that you
						maintain the security of your device.
					</p>
				</Section>

				<Section title="5. Third-Party Services" variants={itemVariants}>
					<p>
						Our extension does not share your information with any third-party
						services.
					</p>
				</Section>

				<Section
					title="6. Changes to This Privacy Policy"
					variants={itemVariants}
				>
					<p>
						We may update our Privacy Policy from time to time. We will notify
						you of any changes by posting the new Privacy Policy on this page.
					</p>
				</Section>

				<Section title="7. Contact Us" variants={itemVariants}>
					<p>
						If you have any questions about this Privacy Policy, please contact
						us at: roshanshetty2000@gmail.com
					</p>
				</Section>

				<motion.footer
					className="text-sm text-gray-300 mt-8 text-center"
					variants={itemVariants}
				>
					<p>Last updated: 08/28/2024 </p>
				</motion.footer>
			</motion.div>
		</div>
	);
};

const Section = ({
	title,
	children,
	variants,
}: {
	title: string;
	children: React.ReactNode;
	variants: any;
}) => (
	<motion.section className="mb-8" variants={variants}>
		<h2 className="text-2xl font-semibold mb-4">{title}</h2>
		{children}
	</motion.section>
);

export default PrivacyPolicy;
