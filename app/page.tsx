import Contact from "@/components/Contact";
import Features  from "@/components/Features";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Header from "@/components/Header";
export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Countdown />
			<Features />
			<Contact />
		</div>
	);
}
