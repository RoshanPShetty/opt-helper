import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
