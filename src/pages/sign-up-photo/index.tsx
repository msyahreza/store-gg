/** @format */

import React from "react";
import Image from "next/image";

export default function SignUpPhoto() {
	return (
		<>
			<section className="mx-auto sign-up-photo pt-lg-227 pb-lg-227 pt-130 pb-50">
				<div className="container mx-auto">
					<form action="">
						<div className="form-input d-md-block d-flex flex-column">
							<div>
								<div className="mb-20">
									<div className="text-center image-upload">
										<label htmlFor="avatar">
											<Image
												src={"/icon/upload.svg"}
												width={120}
												height={120}
												alt="upload"
											/>
										</label>
										<input
											id="avatar"
											type="file"
											name="avatar"
											accept="image/png, image/jpeg"
										/>
									</div>
								</div>
								<h2 className="m-0 text-xl text-center fw-bold color-palette-1">
									Shayna Anne
								</h2>
								<p className="m-0 text-lg text-center color-palette-1">
									shayna@anne.com
								</p>
								<div className="pt-50 pb-50">
									<label
										htmlFor="category"
										className="mb-10 text-lg form-label fw-medium color-palette-1"
									>
										Favorite Game
									</label>
									<select
										id="category"
										name="category"
										className="text-lg form-select d-block w-100 rounded-pill"
										aria-label="Favorite Game"
									>
										<option value="" disabled selected>
											Select Category
										</option>
										<option value="fps">First Person Shoter</option>
										<option value="rpg">Role Playing Game</option>
										<option value="arcade">Arcade</option>
										<option value="sport">Sport</option>
									</select>
								</div>
							</div>

							<div className="mx-auto button-group d-flex flex-column">
								<a
									className="mb-16 text-lg text-white btn btn-create fw-medium rounded-pill"
									href="/sign-up-photo-success"
									role="button"
								>
									Create My Account
								</a>
								{/* <!-- <button type="submit" className="mb-16 text-lg text-white btn btn-create fw-medium rounded-pill"
                            role="button">Create My Account</button> --> */}
								<a
									className="text-lg btn btn-tnc color-palette-1 text-decoration-underline pt-15"
									href="#"
									role="button"
								>
									Terms & Conditions
								</a>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
