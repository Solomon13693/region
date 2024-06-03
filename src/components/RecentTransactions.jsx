import React from 'react';
import CurrencyFormatter from './CurrencyFormatter';

const RecentTransactions = ({ datas }) => {
    return (
        <div className="row mt-4">
            <div className="col-md-10 mt-4">
                <div className="card h-100 mb-4">
                    <div className="card-header pb-0 px-3">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="mb-0">Recent Transactions</h6>
                            </div>
                        </div>
                    </div>

                    <div className="card-body pt-4 p-3">
                        <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">
                            Newest
                        </h6>
                        <ul className="list-group">
                            {datas?.map((transaction, index) => (
                                <li key={index} className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div className="d-flex align-items-center">
                                        <button className={`btn btn-icon-only btn-rounded ${transaction.type === 'Deposit' ? 'btn-outline-success' : 'btn-outline-danger'} mb-0 me-3 btn-sm d-flex align-items-center justify-content-center`}>
                                            <i className={transaction.type === 'Deposit' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'}></i>
                                        </button>
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-1 text-dark text-sm">{transaction.type}</h6>
                                            <span className="text-xs">{transaction.date}</span>
                                            <span className="text-xs pt-2">{transaction.status}</span>
                                        </div>
                                    </div>
                                    <div className={`d-flex align-items-center ${transaction.type === 'Deposit' ? 'text-success' : 'text-danger'} text-gradient text-sm font-weight-bold`}>
                                        <CurrencyFormatter amount={transaction.amount} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentTransactions;
