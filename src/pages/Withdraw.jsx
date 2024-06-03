import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import CurrencyFormatter from '../components/CurrencyFormatter'
import WithdrawalModal from '../components/WithdrawalModal'
import { useDispatch, useSelector } from 'react-redux'
import { getWallet } from '../features/slice/extraSlice'
import { fetchWallet } from '../features/thunks/extraThunks'

const Withdraw = () => {

    const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchWallet())
    }, [dispatch])
    

    const wallet = useSelector(getWallet)

    return (
        <>

            <DashboardLayout>

                <div class="row  mt-5">
                    
                    <div class="col-md-5 col-xxl-4 m-auto">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card pt-3">
                                    <div class="card-header mx-4 p-3 text-center m-auto">
                                        <div class="icon-shape icon-md bg-gradient-info shadow text-center border-radius-md m-auto text-center">
                                            <i class="fas fa-landmark opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div class="card-body pt-0 p-3 text-center">
                                        <h6 class="text-center mb-0">Total Balance</h6>
                                        <h5 class="mb-0"> <CurrencyFormatter amount={wallet?.wallet_balance} currency='USD' /> </h5>
                                        <hr class="horizontal dark" />
                                        <button onClick={() => setShowWithdrawalModal(true)} className="btn bg-gradient-info btn-sm">Withdraw</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="col-md-10 mb-lg-0 mb-4">
                            <div class="card mt-4">

                                <div class="card-header pb-0 p-3">
                                    <div class="row">
                                        <div class="col-6 d-flex align-items-center">
                                            <h6 class="mb-0">Bank Details</h6>
                                        </div>
                                        <div class="col-6 text-end">
                                            <a class="btn bg-gradient-dark mb-0" onClick={() => setShowBankModal(true)}><i class="fas fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add New Bank</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body p-3">
                                    <div class="row">

                                        {accounts?.map((account) => (

                                            <div class="col-md-6 mb-md-0 mb-4">
                                                <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">

                                                    <div className="">
                                                        <h6 class="mb-1"> {account?.account_number} ( {account?.bank} ) </h6>
                                                        <h6 className='text-sm mb-0'>{account?.account_name} </h6>
                                                    </div>


                                                    <i onClick={() => handleAccountDelete(account?.id)} style={{ fontSize: '20px' }} class="ms-auto text-danger cursor-pointer me-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-hidden="true" aria-label="Edit Card" data-bs-original-title="Edit Card"> {!isLoading ? (<IoMdTrash />) : <BtnSpinnerr />} </i>

                                                </div>
                                            </div>


                                        ))}

                                    </div>
                                </div>

                            </div>
                        </div> */}

                </div>

            </DashboardLayout>

            <WithdrawalModal setShowWithdrawalModal={setShowWithdrawalModal} showWithdrawalModal={showWithdrawalModal} />

        </>
    )
}

export default Withdraw