import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { updatePasswordShema } from '../../utils/schema';
import CustomInput from '../FormElements/CustomInput'
import toast from 'react-hot-toast';
import authService from '../../services/authService';
import { getErrorMessage } from '../../utils/errorUtils';
import { BtnSpinner } from '../BtnSpinner';

const Password = ({ token }) => {

    const [loading, setLoading] = useState(false)

    return (

        <div class="card mt-4" id="password">

            <div class="card-header">
                <h5>Change Password</h5>
            </div>

            <Formik
                initialValues={{
                    currentPassword: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={updatePasswordShema}
                onSubmit={async (values, actions) => {

                    setLoading(true);

                    const data = {
                        values, token
                    }

                    try {

                        const response = await authService.updatePassword(data);

                        const { message } = response

                        toast.success(message);

                    } catch (error) {

                        const message =
                            error.response.data.error ||
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString()
                        toast.error(message);

                    } finally {
                        setLoading(false);
                    }

                }}
            >

                {(props) => (

                    <Form autoComplete='off'>

                        <div class="card-body pt-0">

                            <div className="mb-3">
                                <CustomInput label="Current password" name="currentPassword" type="password" placeholder="Current password" />
                            </div>

                            <div className="mb-3">
                                <CustomInput label="New password" name="password" type="password" placeholder="New password" />
                            </div>

                            <div className="mb-3">
                                <CustomInput label="Confirm password" name="confirmPassword" type="password" placeholder="Confirm password" />
                            </div>


                            <h5 class="mt-5">Password requirements</h5>
                            <p class="text-muted mb-2">
                                Please follow this guide for a strong password:
                            </p>
                            <ul class="text-muted ps-4 mb-0 float-start">
                                <li>
                                    <span class="text-sm">One special characters</span>
                                </li>
                                <li>
                                    <span class="text-sm">Min 6 characters</span>
                                </li>
                                <li>
                                    <span class="text-sm">One number (2 are recommended)</span>
                                </li>
                                <li>
                                    <span class="text-sm">Change it often</span>
                                </li>
                            </ul>

                            <button disabled={loading} type='submit' class="btn bg-gradient-dark btn-sm float-end mt-6 mb-4 py-3"> {loading && <BtnSpinner />} Update password</button>

                        </div>

                    </Form>

                )}

            </Formik>

        </div>
    )
}

export default Password