/** @format */

import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TranasctionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Footer from "../components/organisms/Footer";
import Story from "../components/organisms/Story/Index";

export default function MainPage() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Navbar />
			<MainBanner />
			<TransactionStep />
			<FeaturedGame />
			<Story />
			<Footer />
		</>
	);
}
