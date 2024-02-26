/** @format */

import Image from "next/image";
import React from "react";

interface StepItemProps {
	icon: "step-1" | "step-2" | "step-3";
	title: string;
	description: string;
	description2: string;
}
export default function StepItem(props: StepItemProps) {
	const { icon, title, description, description2 } = props;
	return (
		<div className="col-lg-4">
			<div className="border-0 card feature-card">
				<Image
					className="mb-2"
					src={`/icon/${icon}.svg`}
					width={80}
					height={80}
					alt="iconstep-1"
				/>
				<p className="mb-2 text-2xl fw-semibold color-palette-1">{title}</p>
				<p className="mb-0 text-lg color-palette-1">
					{description}
					<br />
					{description2}
				</p>
			</div>
		</div>
	);
}
