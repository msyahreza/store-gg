/** @format */

import Image from "next/image";
import React from "react";

interface GameItemProps {
	gameTitle: string;
	gamePlatform: string;
	gameImage: string;
}
export default function GameItem(props: GameItemProps) {
	const { gameTitle, gamePlatform, gameImage } = props;
	return (
		<div className="featured-game-card position-relative">
			<a href="/detail">
				<div className="blur-sharp">
					<Image
						className="thumbnail"
						src={`/img/${gameImage}.png`}
						width={205}
						height={270}
						alt=""
					/>
				</div>
				<div className="bottom-0 m-32 cover position-absolute">
					<div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
						<div className="mx-auto game-icon">
							<Image
								src="/icon/gamepad.svg"
								width={54}
								height={36}
								alt="Gamepad"
							/>
						</div>
						<div>
							<p className="m-0 text-xl text-white fw-semibold">{gameTitle}</p>
							<p className="m-0 text-white fw-light">{gamePlatform}</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}
