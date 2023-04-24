import React from 'react'

export default function TransactionsDetail() {
  return (
      <>
      <section className="overflow-auto transactions-detail">
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
                <div className="details">
                    <div className="overflow-auto main-content main-content-card">
                        <section className="mx-auto checkout">
                            <div className="flex-row d-flex align-items-center justify-content-between mb-30">
                                <div className="flex-row game-checkout d-flex align-items-center">
                                    <div className="pe-4">
                                        <div className="cropped">
                                            <img src="/img/Thumbnail-3.png" width="200" height="130"
                                                className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-10 text-xl fw-bold color-palette-1">Mobile Legends:<br /> The New
                                            Battle 2021</p>
                                        <p className="m-0 color-palette-2">Category: Mobile</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="m-0 text-center fw-medium label pending rounded-pill">Pending</p>
                                </div>
                            </div>
                            <hr />
                            <div className="purchase pt-30">
                                <h2 className="mb-20 text-xl fw-bold color-palette-1">Purchase Details</h2>
                                <p className="mb-20 text-lg color-palette-1">Your Game ID <span
                                        className="purchase-details">masayoshizero</span></p>
                                <p className="mb-20 text-lg color-palette-1">Order ID <span
                                        className="purchase-details">#GG001</span></p>
                                <p className="mb-20 text-lg color-palette-1">Item <span className="purchase-details">250
                                        Diamonds</span></p>
                                <p className="mb-20 text-lg color-palette-1">Price <span className="purchase-details">Rp
                                        42.280.500</span></p>
                                <p className="mb-20 text-lg color-palette-1">Tax (10%) <span className="purchase-details">Rp
                                        4.228.000</span>
                                </p>
                                <p className="mb-20 text-lg color-palette-1">Total <span
                                        className="purchase-details color-palette-4">Rp
                                        55.000.600</span></p>
                            </div>
                            <div className="pt-10 pb-10 payment">
                                <h2 className="mb-20 text-xl fw-bold color-palette-1">Payment Informations</h2>
                                <p className="mb-20 text-lg color-palette-1">Your Account Name <span
                                        className="purchase-details">Masayoshi
                                        Angga Zero</span></p>
                                <p className="mb-20 text-lg color-palette-1">Type <span className="payment-details">Worldwide
                                        Transfer</span>
                                </p>
                                <p className="mb-20 text-lg color-palette-1">Bank Name <span
                                        className="payment-details">Mandiri</span></p>
                                <p className="mb-20 text-lg color-palette-1">Bank Account Name <span
                                        className="payment-details">PT Store GG
                                        Indonesia</span></p>
                                <p className="mb-20 text-lg color-palette-1">Bank Number <span className="payment-details">1800
                                        - 9090 -
                                        2021</span>
                                </p>
                            </div>
                            <div className="d-md-block d-flex flex-column w-100">
                                <a className="text-lg text-white border-0 btn btn-whatsapp rounded-pill fw-medium" href="#"
                                    role="button">WhatsApp ke Admin</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    </section>
      </>
  )
}
