/** @format */

import Image from "next/image";
import React from "react";

export default function Illustration() {
	return (
		<>
			<div className="col-lg-6 col-12 d-lg-block d-none">
				<div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
					<div className="position-relative" data-aos="zoom-in">
						<img src="/img/Header-1.png" className="img-fluid" alt="" />
						<div className="border-0 card left-card position-absolute">
							<div className="gap-3 mb-16 d-flex align-items-center">
								<img
									src="/img/Header-2.png"
									width="40"
									height="40"
									className="rounded-pill"
									alt=""
								/>
								<div>
									<p className="m-0 text-sm fw-medium color-palette-1">
										Shayna Anne
									</p>
									<p className="m-0 text-xs fw-light color-palette-2">
										Professional Gamer
									</p>
								</div>
							</div>
							<div className="gap-2 d-flex">
								<Image src="/Icon/star.svg" width={24} height={22} alt={""} />
								<Image src="/Icon/star.svg" width={24} height={22} alt={""} />
								<Image src="/Icon/star.svg" width={24} height={22} alt={""} />
								<Image src="/Icon/star.svg" width={24} height={22} alt={""} />
								<Image src="/Icon/star.svg" width={24} height={22} alt={""} />
							</div>
						</div>
						<div className="border-0 card right-card position-absolute">
							<div className="flex-row mb-24 position-relative d-flex justify-content-center">
								<img src="/img/Header-3.png" className="rounded-pill" alt="" />
								<p className="m-0 text-center text-white right-card-support text-xxs position-absolute">
									New
								</p>
							</div>
							<div>
								<p className="m-0 text-sm text-center fw-medium color-palette-1">
									Lann Knight
								</p>
								<p className="m-0 text-xs text-center fw-light color-palette-2">
									Dota 2
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
