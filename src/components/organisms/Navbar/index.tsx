/** @format */

import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import Auth from "./Auth";
import ToggleMenu from "./ToggleMenu";

export default function Navbar() {
	return (
		<>
			{/* <!-- Navbar --> */}
			<section>
				<nav className="bg-white navbar navbar-expand-lg navbar-light bg-light pt-lg-40 pb-lg-40 pt-30 pb-50">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							<Image src={"/icon/logo.svg"} alt="logo" width={60} height={60} />
                        </a>
                        <ToggleMenu />
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="gap-2 text-lg navbar-nav ms-auto gap-lg-0">
								<Menu title="Menu" active href="/" />
								<Menu title="Games" href="/" />
								<Menu title="Rewards" />
								<Menu title="Discover" />
								<Menu title="Global Rank" />
								<Auth isLogin />
							</ul>
						</div>
					</div>
				</nav>
			</section>
		</>
	);
}
