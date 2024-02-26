/** @format */

import React from "react";

interface FooterMenuItemsProps {
	desc: string;
}
export default function FooterMenuItems(props: FooterMenuItemsProps) {
	const { desc } = props;
	return (
		<li className="mb-6">
			<a href="" className="text-lg color-palette-1 text-decoration-none">
				{desc}
			</a>
		</li>
	);
}
