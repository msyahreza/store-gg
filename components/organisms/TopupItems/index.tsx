/** @format */

import Image from "next/image";
import React from "react";

export default function TopupItems() {
	return (
		<div className="row align-items-center">
			<div className="col-md-12 col-4">
				<Image
					src="/img/Thumbnail-3.png"
					width="280"
					height="380"
					className="img-fluid"
					alt=""
				/>
			</div>
			{/* <!-- Mobile: Game title --> */}
			<div className="col-md-12 col-8 d-md-none d-block">
				<h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
					Mobile Legends:
					<br />
					The New Battle 2021
				</h2>
				<p className="text-sm color-palette-2 text-start mb-0">
					Category: Mobile
				</p>
			</div>
		</div>
	);
}
