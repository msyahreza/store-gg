/** @format */

import React from "react";

export default function Transactions() {
	return (
		<>
			<section className="overflow-auto transactions">
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
                <div className="mb-30">
                    <p className="mb-12 text-lg color-palette-2">You’ve spent</p>
                    <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
                </div>
                <div className="mb-20 row mt-30">
                    <div className="col-lg-12 col-12 main-content">
                        <div id="list_status_title">
                            <a data-filter="*" href="#" className="text-sm btn btn-status rounded-pill btn-active me-3">All
                                Trx</a>
                            <a data-filter="success" href="#"
                                className="text-sm btn btn-status rounded-pill me-3">Success</a>
                            <a data-filter="pending" href="#"
                                className="text-sm btn btn-status rounded-pill me-3">Pending</a>
                            <a data-filter="failed" href="#" className="text-sm btn btn-status rounded-pill me-3">Failed</a>
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="overflow-auto main-content main-content-table">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody id="list_status_item">
                                <tr data-category="pending" className="align-middle">
                                    <th scope="row">
                                        <img className="mb-3 float-start me-3 mb-lg-0" src="/img/overview-1.png"
                                            width="80" height="60" alt="" />
                                        <div className="game-title-header">
                                            <p className="m-0 game-title fw-medium text-start color-palette-1">Mobile
                                                Legends:
                                                The New
                                                Battle 2021</p>
                                            <p className="m-0 text-xs fw-normal text-start color-palette-2">Desktop</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p className="m-0 fw-medium color-palette-1">200 Gold</p>
                                    </td>
                                    <td>
                                        <p className="m-0 fw-medium color-palette-1">Rp 290.000</p>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="float-start icon-status pending"></span>
                                            <p className="m-0 fw-medium text-start color-palette-1 position-relative">
                                                Pending</p>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="../member/transactions-detail.html"
                                            className="text-sm btn btn-status rounded-pill">Details</a>
                                    </td>
                                </tr>
                                <tr data-category="success" className="align-middle">
                                    <th scope="row">
                                        <img className="mb-3 float-start me-3 mb-lg-0" src="/img/overview-2.png"
                                            width="80" height="60" alt="" />
                                        <div className="game-title-header">
                                            <p className="m-0 game-title fw-medium text-start color-palette-1">Call of
                                                Duty:Modern</p>
                                            <p className="m-0 text-xs fw-normal text-start color-palette-2">Desktop</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p className="m-0 fw-medium color-palette-1">550 Gold</p>
                                    </td>
                                    <td>
                                        <p className="m-0 fw-medium color-palette-1">Rp 740.000</p>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="float-start icon-status success"></span>
                                            <p className="m-0 fw-medium text-start color-palette-1 position-relative">
                                                Success</p>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="../member/transactions-detail.html"
                                            className="text-sm btn btn-status rounded-pill">Details</a>
                                    </td>
                                </tr>
                                <tr data-category="failed" className="align-middle">
                                    <th scope="row">
                                        <img className="mb-3 float-start me-3 mb-lg-0" src="/img/overview-3.png"
                                            width="80" height="60" alt="" />
                                        <div className="game-title-header">
                                            <p className="m-0 game-title fw-medium text-start color-palette-1">Clash of
                                                Clans</p>
                                            <p className="m-0 text-xs fw-normal text-start color-palette-2">Mobile</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p className="m-0 fw-medium color-palette-1">100 Gold</p>
                                    </td>
                                    <td>
                                        <p className="m-0 fw-medium color-palette-1">Rp 120.000</p>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="float-start icon-status failed"></span>
                                            <p className="m-0 fw-medium text-start color-palette-1 position-relative">Failed
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="../member/transactions-detail.html"
                                            className="text-sm btn btn-status rounded-pill">Details</a>
                                    </td>
                                </tr>
                                <tr data-category="pending" className="align-middle">
                                    <th scope="row">
                                        <img className="mb-3 float-start me-3 mb-lg-0" src="/img/overview-4.png"
                                            width="80" height="60" alt="" />
                                        <div className="game-title-header">
                                            <p className="m-0 game-title fw-medium text-start color-palette-1">The Royal
                                                Game</p>
                                            <p className="m-0 text-xs fw-normal text-start color-palette-2">Mobile</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p className="m-0 fw-medium color-palette-1">225 Gold</p>
                                    </td>
                                    <td>
                                        <p className="m-0 fw-medium color-palette-1">Rp 200.000</p>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="float-start icon-status pending"></span>
                                            <p className="m-0 fw-medium text-start color-palette-1 position-relative">
                                                Pending</p>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="../member/transactions-detail.html"
                                            className="text-sm btn btn-status rounded-pill">Details</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </section>
		</>
	);
}
