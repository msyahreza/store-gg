/**
 * eslint-disable react/no-unknown-property
 *
 * @format
 */

/** @format */

import React from "react";
import StepItem from "../../molecules/StepItem";

export default function TransactionStep() {
	return (
		<>
			<section id="feature" className="feature pt-50 pb-50">
				<div className="container-fluid">
					<h2 className="text-4xl text-center fw-bold color-palette-1 mb-30">
						It’s Really That
						<br /> Easy to Win the Game
					</h2>
					<div className="gap-4 row gap-lg-0" data-aos="fade-up">
						<StepItem
							icon="step-1"
							title="1.Start"
							description="Pilih salah satu game"
							description2="yang ingin kamu top up"
						/>
						<StepItem
							icon="step-2"
							title="2. Fill Up"
							description="Top up sesuai dengan"
							description2="nominal yang sudah tersedia"
						/>
						<StepItem
							icon="step-3"
							title="3. Be a Winner"
							description="Siap digunakan untuk"
							description2="improve permainan kamu"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
