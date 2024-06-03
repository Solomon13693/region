import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import CustomInput from './FormElements/CustomInput';
import CustomPassword from './FormElements/CustomPassword';
import { withdrawalSchema } from '../utils/schema';
import toast from 'react-hot-toast';
import userService from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../features/auth/authSlice';
import { BtnSpinner } from './BtnSpinner';

const WithdrawalModal = (props) => {

    const { showWithdrawalModal, setShowWithdrawalModal } = props;
    const token = useSelector(getToken)

    const navigate = useNavigate()
    const [ loading, setLoading ] = useState(false)

    return (
        <>

            <div className={`modal fade ${showWithdrawalModal ? 'show' : ''}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ paddingTop: '50px', display: showWithdrawalModal ? 'block' : 'none' }}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Withdrawal Modal</h1>
                            <button onClick={() => setShowWithdrawalModal(false)} type="button" class="btn-close text-dark" style={{ fontSize: '24px' }} data-bs-dismiss="modal" aria-label="Close"> x </button>
                        </div>

                        <div class="modal-body">

                            <div className="row">

                                <div class="card ">

                                    <div class="card-body p-3">

                                        <Formik
                                            initialValues={{
                                                password: '',
                                                amount: '',
                                            }}
                                            validationSchema={withdrawalSchema}
                                            onSubmit={async (values, actions) => {

                                                setLoading(true);

                                                const data = {
                                                    values,
                                                    token
                                                }
    
                                                try {
    
                                                    const response = await userService.Withdraw(data);
                                                    toast.success(response.message);
    
                                                    setShowWithdrawalModal(false)
                                                    navigate('/withdraw/history', { replace: false })
    
                                                } catch (error) {
    
                                                    const message =
                                                    error?.response?.data?.error ||
                                                    (error?.response &&
                                                        error?.response?.data &&
                                                        error?.response?.data?.message) ||
                                                    error?.message ||
                                                    error?.toString();

                                                    toast.error(message);
    
                                                } finally {
                                                    setLoading(false);
                                                }
    
                                            }}
                                        >

                                            {(props) => (

                                                <Form autoComplete='off'>

                                                    <div className="mb-3">
                                                        <CustomInput label="Amount" name="amount" type="number" placeholder="Amount" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <CustomPassword label="Password" name="password" placeholder="**********" />
                                                    </div>

                                                    <button disabled={loading} className="btn bg-gradient-info w-100 py-3"> { loading && <BtnSpinner /> } Submit</button>

                                                </Form>

                                            )}

                                        </Formik>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {showWithdrawalModal && (<div className={`modal-backdrop fade ${showWithdrawalModal && 'show'} `}></div>)}


        </>
    )
}

export default WithdrawalModal