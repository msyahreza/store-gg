/** @format */

import React from "react";

export default function TopupForm() {
	return (
		<form action="./checkout.html" method="POST">
			<div className="pt-md-50 pt-30">
				<div className="">
					<label
						htmlFor="ID"
						className="mb-10 text-lg form-label fw-medium color-palette-1"
					>
						Verify ID
					</label>
					<input
						type="text"
						className="text-lg form-control rounded-pill"
						id="ID"
						name="ID"
						aria-describedby="verifyID"
						placeholder="Enter your ID"
					/>
				</div>
			</div>
			<div className="pb-20 pt-md-50 pb-md-50 pt-30">
				<p className="mb-0 text-lg fw-medium color-palette-1 mb-md-10">
					Nominal Top Up
				</p>
				<div className="row justify-content-between">
					<label
						className="pt-10 pb-10 col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15"
						htmlFor="topup1"
					>
						<input
							className="d-none"
							type="radio"
							id="topup1"
							name="topup"
							value="topup1"
						/>
						<div className="detail-card">
							<div className="d-flex justify-content-between">
								<p className="m-0 text-3xl color-palette-1">
									<span className="fw-medium">125</span>
									Gold
								</p>
								<svg
									id="icon-check"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="10" cy="10" r="10" fill="#CDF1FF" />
									<path
										d="M5.83301 10L8.46459 12.5L14.1663 7.5"
										stroke="#00BAFF"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<p className="m-0 text-lg color-palette-1">Rp 3.250.000</p>
						</div>
					</label>
					<label
						className="pt-10 pb-10 col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15"
						htmlFor="topup2"
					>
						<input
							className="d-none"
							type="radio"
							id="topup2"
							name="topup"
							value="topup2"
						/>
						<div className="detail-card">
							<div className="d-flex justify-content-between">
								<p className="m-0 text-3xl color-palette-1">
									<span className="fw-medium">225</span>
									Gold
								</p>
								<svg
									id="icon-check"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="10" cy="10" r="10" fill="#CDF1FF" />
									<path
										d="M5.83301 10L8.46459 12.5L14.1663 7.5"
										stroke="#00BAFF"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<p className="m-0 text-lg color-palette-1">Rp 3.250.000</p>
						</div>
					</label>
					<label
						className="pt-10 pb-10 col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15"
						htmlFor="topup3"
					>
						<input
							className="d-none"
							type="radio"
							id="topup3"
							name="topup"
							value="topup3"
						/>
						<div className="detail-card">
							<div className="d-flex justify-content-between">
								<p className="m-0 text-3xl color-palette-1">
									<span className="fw-medium">350</span>
									Gold
								</p>
								<svg
									id="icon-check"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="10" cy="10" r="10" fill="#CDF1FF" />
									<path
										d="M5.83301 10L8.46459 12.5L14.1663 7.5"
										stroke="#00BAFF"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<p className="m-0 text-lg color-palette-1">Rp 3.250.000</p>
						</div>
					</label>
					<label
						className="pt-10 pb-10 col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15"
						htmlFor="topup4"
					>
						<input
							className="d-none"
							type="radio"
							id="topup4"
							name="topup"
							value="topup4"
						/>
						<div className="detail-card">
							<div className="d-flex justify-content-between">
								<p className="m-0 text-3xl color-palette-1">
									<span className="fw-medium">550</span>
									Gold
								</p>
								<svg
									id="icon-check"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="10" cy="10" r="10" fill="#CDF1FF" />
									<path
										d="M5.83301 10L8.46459 12.5L14.1663 7.5"
										stroke="#00BAFF"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<p className="m-0 text-lg color-palette-1">Rp 3.250.000</p>
						</div>
					</label>
					<label
						className="pt-10 pb-10 col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15"
						htmlFor="topup5"
					>
						<input
							className="d-none"
							type="radio"
							id="topup5"
							name="topup"
							value="topup5"
						/>
						<div className="detail-card">
							<div className="d-flex justify-content-between">
								<p className="m-0 text-3xl color-palette-1">
									<span className="fw-medium">750</span>
									Gold
								</p>
								<svg
									id="icon-check"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="10" cy="10" r="10" fill="#CDF1FF" />
									<path
										d="M5.83301 10L8.46459 12.5L14.1663 7.5"
										stroke="#00BAFF"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<p className="m-0 text-lg color-palette-1">Rp 3.250.000</p>
						</div>
					</label>
					<div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
				</div>
			</div>
			<div className="pb-20 pb-md-50">
				<p className="mb-0 text-lg fw-medium color-palette-1 mb-md-10">
					Payment Method
				</p>
				<fieldset id="paymentMethod">
					<div className="row justify-content-between">
						<label
							className="pt-10 pb-10 col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15"
							htmlFor="transfer"
						>
							<input
								className="d-none"
								type="radio"
								id="transfer"
								name="paymentMethod"
								value="transfer"
							/>
							<div className="detail-card">
								<div className="d-flex justify-content-between">
									<p className="m-0 text-3xl color-palette-1 fw-medium">
										Transfer
									</p>
									<svg
										id="icon-check"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="10" cy="10" r="10" fill="#CDF1FF" />
										<path
											d="M5.83301 10L8.46459 12.5L14.1663 7.5"
											stroke="#00BAFF"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<p className="m-0 text-lg color-palette-1">
									Worldwide Available
								</p>
							</div>
						</label>
						<label
							className="pt-10 pb-10 col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15"
							htmlFor="visa"
						>
							<input
								className="d-none"
								type="radio"
								id="visa"
								name="paymentMethod"
								value="visa"
							/>
							<div className="detail-card">
								<div className="d-flex justify-content-between">
									<p className="m-0 text-3xl color-palette-1 fw-medium">VISA</p>
									<svg
										id="icon-check"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="10" cy="10" r="10" fill="#CDF1FF" />
										<path
											d="M5.83301 10L8.46459 12.5L14.1663 7.5"
											stroke="#00BAFF"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<p className="m-0 text-lg color-palette-1">Credit Card</p>
							</div>
						</label>
						<div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
					</div>
				</fieldset>
			</div>
			<div className="pb-50">
				<label
					htmlFor="bankAccount"
					className="mb-10 text-lg form-label fw-medium color-palette-1"
				>
					Bank Account Name
				</label>
				<input
					type="text"
					className="text-lg form-control rounded-pill"
					id="bankAccount"
					name="bankAccount"
					aria-describedby="bankAccount"
					placeholder="Enter your Bank Account Name"
				/>
			</div>
			<div className="d-sm-block d-flex flex-column w-100">
				<a
					href="/checkout"
					type="submit"
					className="text-lg text-white border-0 btn btn-submit rounded-pill fw-medium"
				>
					Continue
				</a>
				{/* <button type="submit"
                                className="text-lg text-white border-0 btn btn-submit rounded-pill fw-medium">Continue</button> */}
			</div>
		</form>
	);
}
