/** @format */

import Image from "next/image";
import React from "react";
import TopupForm from "../../components/organisms/TopupForm";
import TopupItems from "../../components/organisms/TopupItems";
import Header from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";

export default function Detail() {
	return (
		<>
			<Header />
			<section className="detail pt-lg-60 pb-50">
				<div className="container-xxl container-fluid">
					<div className="detail-header pb-50">
						<h2 className="mb-10 text-4xl fw-bold color-palette-1 text-start">
							Top Up
						</h2>
						<p className="mb-0 text-lg color-palette-1">
							Perkuat akun dan jadilah pemenang
						</p>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
							<TopupItems type="mobile" />
						</div>
						<div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
							{/* <!-- Desktop: Game title --> */}
							<TopupItems type="desktop" />
							<hr />
							<TopupForm />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
