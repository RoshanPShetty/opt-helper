import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
	subsets: ["latin"],
	variable: "--font-serif",
	weight: "400",
});


export const metadata: Metadata = {
	title: "OPT Helper for International Students",
	description:
		"A comprehensive tool designed to assist international students in navigating the OPT and STEM OPT application processes. Access essential information, track your application status, verify employer E-Verify enrollment, and generate personalized timelines to ensure you meet all requirements.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={twMerge(
					inter.variable,
					calistoga.variable,
					"antialiased font-sans"
				)}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
