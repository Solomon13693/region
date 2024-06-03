import React from 'react'
import CurrencyFormatter from './CurrencyFormatter'

const Overview = ({ wallet }) => {
    return (
        <div className="row">

            <div className="col-lg-8 position-relative z-index-2">

                <div className="card card-plain mb-4">
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="d-flex flex-column h-100">
                                    <h2 className="font-weight-bolder mb-0">
                                        General Statistics
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-5 col-sm-6">

                        <div className="card mb-4">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                                Balance
                                            </p>
                                            <h5 className="font-weight-bolder mb-0">
                                                <CurrencyFormatter amount={wallet?.wallet_balance} />
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end text-end">
                                        <div className="icon-shape bg-gradient-info shadow text-center border-radius-md">
                                            <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                                Pending Withdrawals
                                            </p>
                                            <h5 className="font-weight-bolder mb-0">
                                                { wallet?.pending_withdrawals_count }
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <div className="icon-shape bg-gradient-info shadow text-center border-radius-md">
                                            <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-5 col-sm-6 mt-sm-0 mt-4">

                        <div className="card mb-4">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                                Pending Deposit
                                            </p>
                                            <h5 className="font-weight-bolder mb-0">
                                                { wallet?.pending_deposit }
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <div className="icon-shape bg-gradient-info shadow text-center border-radius-md">
                                            <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                                Successful Deposit 
                                            </p>
                                            <h5 className="font-weight-bolder mb-0">
                                                { wallet?.activeDeposit }
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <div className="icon-shape bg-gradient-info shadow text-center border-radius-md">
                                            <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Overview