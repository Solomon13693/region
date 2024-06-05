import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ProfileSchema } from '../../utils/schema';
import CustomInput from '../FormElements/CustomInput'
import { getErrorMessage } from '../../utils/errorUtils';
import authService from '../../services/authService';
import { BtnSpinner } from '../BtnSpinner';
import toast from 'react-hot-toast';
import { setUser } from '../../features/auth/authSlice';
import Cookies from 'js-cookie';

const BasicInfo = ({ user, token }) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    return (

        <div class="card mt-4" id="basic-info">

            <div class="card-header">
                <h5>Basic Info</h5>
            </div>

            <div class="card-body pt-0">

                <Formik enableReinitialize={true}
                    initialValues={{
                        email: user ? user?.email : '',
                        name: user ? user?.name : '',
                        phone: user ? user?.phone : '',
                        address: user ? user?.address : '',
                    }}
                    validationSchema={ProfileSchema}
                    onSubmit={async (values, actions) => {

                        setLoading(true);

                        const data = {
                            values, token
                        }

                        try {

                            const response = await authService.updateUser(data);

                            const { message, user } = response

                            console.log(user);

                            dispatch(setUser(user))

                            Cookies.set('profile', JSON.stringify(user))

                            toast.success(message);

                        } catch (error) {

                            const message = getErrorMessage(error);
                            toast.error(message);

                        } finally {
                            setLoading(false);
                        }

                    }}
                >

                    {(props) => (

                        <Form autoComplete='off'>

                            <div class="row">

                                <div class="col-sm-12 mb-3">
                                    <CustomInput label="Full name" name="name" type="text" placeholder="First Name" />
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <CustomInput label="Email address" name="email" type="email" placeholder="Email address" />
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <CustomInput label="Phone Number" name="phone" type="tel" placeholder="Phone Number" />
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <CustomInput label="Address" name="address" type="text" placeholder="Address" />
                                </div>

                                <div className="col-sm-6"></div>

                                <div className="col-12">
                                    <button disabled={loading} type='submit' class="btn bg-gradient-dark btn-sm float-end py-3 mb-0"> {loading && <BtnSpinner />} Update Profile </button>
                                </div>

                            </div>

                        </Form>

                    )}

                </Formik>


            </div>

        </div>

    )
}

export default BasicInfo