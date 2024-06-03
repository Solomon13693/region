import React, { useState } from 'react'
import Image from '../../assets/img/curved-images/curved14.jpg'
import { Form, Formik } from 'formik'
import CustomInput from '../../components/FormElements/CustomInput'
import CustomPassword from '../../components/FormElements/CustomPassword'
import { LoginSchema } from '../../utils/schema'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../services/authService'
import toast from 'react-hot-toast'
import { BtnSpinner } from '../../components/BtnSpinner'
import Cookies from 'js-cookie';
import { setToken, setUser } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    return (
        <>

            <main className="main-content mt-0">

                <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
                    style={{ backgroundImage: `url(${Image})` }}>
                    <span className="mask bg-gradient-dark opacity-3"></span>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 text-center mx-auto">
                                <h1 className="text-white mb-2 mt-5">Welcome Back!</h1>
                                <p className="text-lead text-white">
                                    Use these awesome forms to login to your account.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">

                        <div className="col-xl-5 col-lg-5 col-md-7 mx-auto">
                            <div className="card z-index-0 pt-3">

                                <div className="card-header text-center">
                                    <h4 class="font-weight-bolder mb-1">Login</h4>
                                </div>

                                <div className="card-body">

                                    <Formik
                                        initialValues={{
                                            email: '',
                                            password: '',
                                        }}
                                        validationSchema={LoginSchema}
                                        onSubmit={async (values, actions) => {

                                            setLoading(true);

                                            try {

                                                const response = await authService.Login(values);

                                                const { user, token, token_expires_at, message } = response

                                                const expirationDate = new Date(token_expires_at);
                                                const timestamp = expirationDate.getTime();

                                                const cookieExpirationDate = new Date(timestamp)
                                                Cookies.set('token', token, { expires: cookieExpirationDate, secure: true, sameSite: 'lax' });

                                                Cookies.set('profile', JSON.stringify(user))

                                                dispatch(setToken(token));
                                                dispatch(setUser(user));

                                                toast.success(message);

                                                
                                                navigate('/dashboard', { replace: true })

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

                                                <div className="mb-4">
                                                    <CustomInput label="Email address" name="email" type="email" placeholder="Email address" />
                                                </div>

                                                <div className="mb-4">
                                                    <CustomPassword label="Password" name="password" placeholder="**********" />
                                                </div>

                                                <div className="d-flex justify-content-between mb-4">

                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="rememberMe"
                                                        />
                                                        <label className="form-check-label" for="rememberMe"
                                                        >Remember me</label
                                                        >
                                                    </div>

                                                    {/* <p class="text-sm pt-1"> <Link to="/forgot-password" class="text-dark font-weight-bolder">Forgot Password</Link></p> */}

                                                </div>

                                                <div className="text-center">
                                                    <button
                                                        type="submit"
                                                        className="btn bg-gradient-info w-100 py-3 mb-4 mt-2"
                                                    >
                                                        {loading && <BtnSpinner />} Sign in
                                                    </button>
                                                </div>

                                            </Form>

                                        )}

                                    </Formik>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </main>

        </>
    )
}

export default Login