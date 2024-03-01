/** @format */

import Image from "next/image";
import React from "react";

interface TopupItemsProps {
	type: "desktop" | "mobile";
}
export default function TopupItems(props: TopupItemsProps) {
	const { type } = props;

	if (type === "desktop") {
		return (
			<div className="pb-50 d-md-block d-none">
				<h2 className="mt-10 mb-10 text-4xl fw-bold color-palette-1 text-start">
					Mobile Legends:
					<br />
					The New Battle 2021
				</h2>
				<p className="mb-0 text-lg color-palette-2">Category: Mobile</p>
			</div>
		);
	}

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
				<h2 className="mb-10 text-xl fw-bold color-palette-1 text-start">
					Mobile Legends:
					<br />
					The New Battle 2021
				</h2>
				<p className="mb-0 text-sm color-palette-2 text-start">
					Category: Mobile
				</p>
			</div>
		</div>
	);
}
