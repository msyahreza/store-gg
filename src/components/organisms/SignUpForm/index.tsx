/** @format */

import React from "react";

export default function SignUpForm() {
	return (
		<>
			<h2 className="mb-10 text-4xl fw-bold color-palette-1">Sign Up</h2>
			<p className="m-0 text-lg color-palette-1">
				Daftar dan bergabung dengan kami
			</p>
			<div className="pt-50">
				<label
					htmlFor="name"
					className="mb-10 text-lg form-label fw-medium color-palette-1"
				>
					Full Name
				</label>
				<input
					type="text"
					className="text-lg form-control rounded-pill"
					id="name"
					name="name"
					aria-describedby="name"
					placeholder="Enter your name"
				/>
			</div>
			<div className="pt-30">
				<label
					htmlFor="email"
					className="mb-10 text-lg form-label fw-medium color-palette-1"
				>
					Email Address
				</label>
				<input
					type="email"
					className="text-lg form-control rounded-pill"
					id="email"
					name="email"
					aria-describedby="email"
					placeholder="Enter your email address"
				/>
			</div>
			<div className="pt-30">
				<label
					htmlFor="password"
					className="mb-10 text-lg form-label fw-medium color-palette-1"
				>
					Password
				</label>
				<input
					type="password"
					className="text-lg form-control rounded-pill"
					id="password"
					name="password"
					aria-describedby="password"
					placeholder="Your password"
				/>
			</div>
			<div className="mx-auto button-group d-flex flex-column pt-50">
				<a
					className="mb-16 text-lg text-white btn btn-sign-up fw-medium rounded-pill"
					href="/sign-up-photo"
					role="button"
				>
					Continue
				</a>
				{/* <!-- <button type="submit" className="mb-16 text-lg text-white btn btn-sign-up fw-medium rounded-pill"
                        role="button">Continue</button> --> */}
				<a
					className="text-lg btn btn-sign-in fw-medium color-palette-1 rounded-pill"
					href="/sign-in"
					role="button"
				>
					Sign In
				</a>
			</div>
		</>
	);
}
