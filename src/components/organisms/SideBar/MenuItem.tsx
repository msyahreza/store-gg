/** @format */

import classNames from "classnames";
import Image from "next/image";
import React from "react";
import cx from "classnames";

interface MenuItemProps {
	title: string;
	icon: string;
	active?: boolean;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
	const { title, icon, active } = props;
	const classItem = cx({
		item: true,
		"mb-30": true,
		active,
	});

	return (
		<div className={classItem}>
			<div className="me-3">
				<Image
					src={`/icon/iconMenu${icon}.svg`}
					width={25}
					height={25}
					alt="iconMenuOverview"
				/>
			</div>

			<p className="m-0 item-title">
				<a href="" className="text-lg text-decoration-none">
					{title}
				</a>
			</p>
		</div>
	);
}
