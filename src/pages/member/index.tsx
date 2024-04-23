/** @format */

import OverviewContent from "@/components/organisms/Overview";
import Sidebar from "@/components/organisms/SideBar";
import React from "react";

export default function Member() {
	return (
		<>
			<section className="overflow-auto overview">
				<Sidebar />
				<OverviewContent />
			</section>
		</>
	);
}
