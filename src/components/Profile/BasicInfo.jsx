import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProfileSchema } from '../../utils/schema';
import CustomInput from '../FormElements/CustomInput';
import { getErrorMessage } from '../../utils/errorUtils';
import authService from '../../services/authService';
import { BtnSpinner } from '../BtnSpinner';
import toast from 'react-hot-toast';
import { setUser } from '../../features/auth/authSlice';
import Cookies from 'js-cookie';

const BasicInfo = ({ user, token }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    return (
        <div className="card mt-4" id="basic-info">
            <div className="card-header">
                <h5>Basic Info</h5>
            </div>
            <div className="card-body pt-0">
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        email: user?.email || '',
                        name: user?.name || '',
                        phone: user?.phone || '',
                        address: user?.address || '',
                    }}
                    validationSchema={ProfileSchema}
                    onSubmit={async (values, actions) => {
                        setLoading(true);
                        const data = {
                            values,
                            token,
                        };

                        try {
                            const response = await authService.updateUser(data);
                            const { message, user } = response;
                            dispatch(setUser(user));
                            Cookies.set('profile', JSON.stringify(user));
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
                        <Form autoComplete="off">
                            <div className="row">
                                <div className="col-sm-12 mb-3">
                                    <CustomInput label="Full name" name="name" type="text" placeholder="First Name" />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <CustomInput label="Email address" name="email" type="email" placeholder="Email address" />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <CustomInput label="Phone Number" name="phone" type="tel" placeholder="Phone Number" />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <CustomInput label="Address" name="address" type="text" placeholder="Address" />
                                </div>
                                <div className="col-sm-6"></div>
                                <div className="col-12">
                                    <button disabled={loading} type="submit" className="btn bg-gradient-dark btn-sm float-end py-3 mb-0">
                                        {loading && <BtnSpinner />} Update Profile
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default BasicInfo;
