/** @format */

import Image from "next/image";
import { Inter } from "next/font/google";
import MainPage from "./mainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return <MainPage></MainPage>;
}
