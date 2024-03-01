/** @format */

import React from "react";
import cx from "classnames";
import Link from "next/link";

interface MenuProps {
	title: string;
	active?: boolean;
	href: string;
}

export default function Menu(props: Partial<MenuProps>) {
	const { title, active, href = "/" } = props;
	const classTitle = cx({
		"nav-link": true,
		active,
	});

	return (
		<>
			<li className="my-auto nav-item">
				<Link className={classTitle} aria-current="page" href={href}>
					{title}
				</Link>
			</li>
		</>
	);
}
