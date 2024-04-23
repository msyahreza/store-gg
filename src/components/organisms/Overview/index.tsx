/** @format */

import React from "react";
import Categories from "./Categories";

export default function OverviewContent() {
	return (
		<main className="main-wrapper">
			<div className="ps-lg-0">
				<h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
				<div className="top-up-categories mb-30">
					<p className="text-lg fw-medium color-palette-1 mb-14">
						Top Up Categories
					</p>
					<div className="main-content">
						<div className="row">
							<Categories nominal={18500000} icon="Desktop">
								Game <br /> Desktop
							</Categories>
							<Categories nominal={8455000} icon="Mobile">
								Game <br /> Mobile
							</Categories>
							<Categories nominal={5000000} icon="Desktop">
								Other <br /> Categories
							</Categories>
						</div>
					</div>
				</div>
				<div className="latest-transaction">
					<p className="text-lg fw-medium color-palette-1 mb-14">
						Latest Transactions
					</p>
					<div className="overflow-auto main-content main-content-table">
						<table className="table table-borderless">
							<thead>
								<tr className="color-palette-1">
									<th className="text-start" scope="col">
										Game
									</th>
									<th scope="col">Item</th>
									<th scope="col">Price</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								<tr className="align-middle">
									<th scope="row">
										<img
											className="mb-3 float-start me-3 mb-lg-0"
											src="/img/overview-1.png"
											width="80"
											height="60"
											alt=""
										/>
										<div className="game-title-header">
											<p className="m-0 game-title fw-medium text-start color-palette-1">
												Mobile Legends: The New Battle 2021
											</p>
											<p className="m-0 text-xs fw-normal text-start color-palette-2">
												Desktop
											</p>
										</div>
									</th>
									<td>
										<p className="m-0 fw-medium color-palette-1">200 Gold</p>
									</td>
									<td>
										<p className="m-0 fw-medium text-start color-palette-1">
											Rp 290.000
										</p>
									</td>
									<td>
										<div>
											<span className="float-start icon-status pending"></span>
											<p className="m-0 fw-medium text-start color-palette-1 position-relative">
												Pending
											</p>
										</div>
									</td>
								</tr>
								<tr className="text-center align-middle">
									<th scope="row">
										<img
											className="mb-3 float-start me-3 mb-lg-0"
											src="/img/overview-2.png"
											width="80"
											height="60"
											alt=""
										/>
										<div className="game-title-header">
											<p className="m-0 game-title fw-medium text-start color-palette-1">
												Call of Duty:Modern
											</p>
											<p className="m-0 text-xs fw-normal text-start color-palette-2">
												Desktop
											</p>
										</div>
									</th>
									<td>
										<p className="m-0 fw-medium text-start color-palette-1">
											550 Gold
										</p>
									</td>
									<td>
										<p className="m-0 fw-medium text-start color-palette-1">
											Rp 740.000
										</p>
									</td>
									<td>
										<div>
											<span className="float-start icon-status success"></span>
											<p className="m-0 fw-medium text-start color-palette-1 position-relative">
												Success
											</p>
										</div>
									</td>
								</tr>
								<tr className="text-center align-middle">
									<th scope="row">
										<img
											className="mb-3 float-start me-3 mb-lg-0"
											src="/img/overview-3.png"
											width="80"
											height="60"
											alt=""
										/>
										<div className="game-title-header">
											<p className="m-0 game-title fw-medium text-start color-palette-1">
												Clash of Clans
											</p>
											<p className="m-0 text-xs fw-normal text-start color-palette-2">
												Mobile
											</p>
										</div>
									</th>
									<td>
										<p className="m-0 fw-medium text-start color-palette-1">
											100 Gold
										</p>
									</td>
									<td>
										<p className="m-0 fw-medium text-start color-palette-1">
											Rp 120.000
										</p>
									</td>
									<td>
										<div>
											<span className="float-start icon-status failed"></span>
											<p className="m-0 fw-medium text-start color-palette-1 position-relative">
												Failed
											</p>
										</div>
									</td>
								</tr>
								<tr className="text-center align-middle">
									<th scope="row">
										<img
											className="mb-3 float-start me-3 mb-lg-0"
											src="/img/overview-4.png"
											width="80"
											height="60"
											alt=""
										/>
										<div className="game-title-header">
											<p className="m-0 game-title fw-medium text-start color-palette-1">
												The Royal Game
											</p>
											<p className="m-0 text-xs fw-normal text-start color-palette-2">
												Mobile
											</p>
										</div>
									</th>
									<td>
										<p className="m-0 fw-medium text-start color-palette-1">
											225 Gold
										</p>
									</td>
									<td>
										<p className="m-0 fw-medium text-start color-palette-1">
											Rp 200.000
										</p>
									</td>
									<td>
										<div>
											<span className="float-start icon-status pending"></span>
											<p className="m-0 fw-medium text-start color-palette-1 position-relative">
												Pending
											</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
