/** @format */

import Image from "next/image";
import React from "react";
import FooterMenuItems from "../../molecules/FooterItem/index";

export default function Footer() {
	return (
		<section className="footer pt-50">
			<footer>
				<div className="container-fluid">
					<div className="row">
						<div className="text-center col-lg-4 text-lg-start">
							<a href="" className="mb-30">
								<Image
									src="/icon/store-logo.svg"
									width={60}
									height={60}
									alt="store-logo"
								/>
							</a>
							<p className="text-lg mt-30 color-palette-1 mb-30">
								StoreGG membantu gamers
								<br /> untuk menjadi pemenang sejati
							</p>
							<p className="text-lg mt-30 color-palette-1 mb-30">
								Copyright 2021. All Rights Reserved.
							</p>
						</div>
						<div className="mt-20 col-lg-8 mt-lg-0">
							<div className="row gap-sm-0">
								<div className="col-md-4 col-6 mb-lg-0 mb-25">
									<p className="mb-12 text-lg fw-semibold color-palette-1">
										Company
									</p>
									<ul className="list-unstyled">
										<FooterMenuItems desc="About Us" />
										<FooterMenuItems desc="Press Release" />
										<FooterMenuItems desc="Terms of Use" />
										<FooterMenuItems desc="Privacy & Policy" />
									</ul>
								</div>
								<div className="col-md-4 col-6 mb-lg-0 mb-25">
									<p className="mb-12 text-lg fw-semibold color-palette-1">
										Support
									</p>
									<ul className="list-unstyled">
										<FooterMenuItems desc="Refund Policy" />
										<FooterMenuItems desc="Unlock Rewards" />
										<FooterMenuItems desc="Live Chatting" />
									</ul>
								</div>
								<div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
									<p className="mb-12 text-lg fw-semibold color-palette-1">
										Connect
									</p>
									<ul className="list-unstyled">
										<FooterMenuItems desc="hi@store.gg" />
										<FooterMenuItems desc="team@store.gg" />
										<FooterMenuItems desc="Pasific 12, Jakarta Selatan" />
										<FooterMenuItems desc="021 - 1122 - 9090" />
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}
