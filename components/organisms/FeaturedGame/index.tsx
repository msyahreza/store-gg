/** @format */

import React from "react";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
	return (
		<section className="featured-game pt-50 pb-50">
			<div className="container-fluid">
				<h2 className="text-4xl fw-bold color-palette-1 mb-30">
					Our Featured
					<br /> Games This Year
				</h2>
				<div
					className="flex-row gap-4 d-flex flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3"
					data-aos="fade-up"
				>
					<GameItem
						gameTitle="Super Mechs"
						gamePlatform="Mobile"
						gameImage="Thumbnail-1"
					/>
					<GameItem
						gameTitle="Call of Duty: Modern"
						gamePlatform="Mobile"
						gameImage="Thumbnail-2"
					/>
					<GameItem
						gameTitle="Mobile Legends"
						gamePlatform="Mobile"
						gameImage="Thumbnail-3"
					/>
					<GameItem
						gameTitle="Clash of Clans"
						gamePlatform="Mobile"
						gameImage="Thumbnail-4"
					/>
					<GameItem
						gameTitle="Valorant"
						gamePlatform="Desktop"
						gameImage="Thumbnail-5"
					/>
				</div>
			</div>
		</section>
	);
}
