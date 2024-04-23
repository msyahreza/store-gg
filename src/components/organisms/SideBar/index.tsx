/** @format */

import React from "react";
import Profile from "./profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

export default function Sidebar() {
	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem icon="Overview" title="Overview" active />
					<MenuItem icon="Transaction" title="Transactions" />
					<MenuItem icon="Messages" title="Messages" />
					<MenuItem icon="Card" title="Card" />
					<MenuItem icon="Rewards" title="Rewards" />
					<MenuItem icon="Settings" title="Settings" />
					<MenuItem icon="Logout" title="Log Out" />
				</div>
				<Footer />
			</div>
		</section>
	);
}
