/** @format */

import React, { Children, ReactNode } from "react";
import Image from "next/image";

interface CategoriesProps {
	children: ReactNode;
	nominal: number;
	icon: string;
}
export default function Categories(props: CategoriesProps) {
	const { children, nominal, icon } = props;
	return (
		<div className="pb-4 col-lg-4 ps-15 pe-15 pb-lg-0">
			<div className="categories-card">
				<div className="mb-24 d-flex align-items-center">
					<Image
						src={`/icon/icon${icon}.svg`}
						width={60}
						height={60}
						alt="iconDekstop"
					/>
					<p className="mb-0 color-palette-1 ms-12">{children}</p>
				</div>
				<div>
					<p className="mb-1 text-sm color-palette-2">Total Spent</p>
					<p className="m-0 text-2xl color-palette-1 fw-medium">{nominal}</p>
				</div>
			</div>
		</div>
	);
}
