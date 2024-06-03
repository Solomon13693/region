import { Formik, Form } from "formik";
import { withdrawalSchema } from "../../utils/schema";
import CustomInput from "../FormElements/CustomInput";
import CustomPassword from "../FormElements/CustomPassword";
import { BtnSpinner } from "../BtnSpinner";
import { useState } from "react";
import toast from "react-hot-toast";
import userService from "../../services/userService";
import { useSelector } from "react-redux";
import { getToken } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const DepositModal = ({ open, setOpen }) => {

    const [loading, setLoading] = useState(false);

    const token = useSelector(getToken)

    const navigate = useNavigate()

    return (
        <>
            <div className={`modal position-fixed fade ${open ? 'show' : ''}`}
                tabIndex="-1" style={{ display: open ? 'block' : 'none', zIndex: '10000' }}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content p-2">

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Deposit</h5>
                            <button
                                type="button"
                                className="btn-close text-dark"
                                aria-label="Close"
                                onClick={() => setOpen(false)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="card">
                                    <div className="card-body p-3">
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

                                                    const response = await userService.DepositRequest(data);
                                                    toast.success(response.message);

                                                    setOpen(false)
                                                    navigate('/deposit/history', { replace: false })

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
                                                    <button
                                                        type="submit"
                                                        disabled={loading}
                                                        className="btn bg-gradient-info w-100 py-3"
                                                    >
                                                        {loading ? <BtnSpinner /> : "Submit"}
                                                    </button>
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
            {open && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default DepositModal;
