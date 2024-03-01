/** @format */

import Image from "next/image";
import React from "react";
import Illustration from "./Illustration";

export default function MainBanner() {
	return (
		<>
			<section className="header pt-lg-60 pb-50">
				<div className="container-xxl container-fluid">
					<div className="gap-5 row gap-lg-0">
						<div className="my-auto col-lg-6 col-12">
							<p className="text-lg text-support color-palette-2">
								Halo gamers,
							</p>
							<h1 className="header-title color-palette-1 fw-bold">
								Topup & Get <span className="d-sm-inline d-none">a</span>
								<span className="d-sm-none d-inline">a</span>
								<span className="underline-blue"> New</span>{" "}
								<br className="d-sm-block d-none" />{" "}
								<span className="underline-blue">Experience</span> in Gaming
							</h1>
							<p className="mb-40 text-lg mt-30 color-palette-1">
								Kami menyediakan jutaan cara untuk membantu
								<br className="d-md-block d-none" /> players menjadi pemenang
								sejati
							</p>
							<div className="gap-4 d-flex flex-lg-row flex-column">
								<a
									className="text-lg text-white btn btn-get rounded-pill"
									href="#feature"
									role="button"
								>
									Get Started
								</a>
								<a
									className="my-auto text-lg text-center btn-learn color-palette-1"
									href="#"
									role="button"
								>
									Learn More
								</a>
							</div>
						</div>
						<Illustration />
					</div>
				</div>
			</section>
		</>
	);
}
