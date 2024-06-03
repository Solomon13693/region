import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { useSelector } from 'react-redux'
import { getToken } from '../features/auth/authSlice'
import userService from '../services/userService'
import TableSkeletonLoader from '../components/TableSkeletonLoader'
import { EachElement } from '../utils/Each'
import CurrencyFormatter from '../components/CurrencyFormatter'

const WithdrawalHistory = () => {

    const token = useSelector(getToken)
    const [data, setDatas] = useState([])
    const [loading, setLoading] = useState(false)

    const getStatusStyles = (status) => {
        let textColor;

        switch (status) {
            case "Succesful":
                textColor = "text-success";
                break;
            case "Pending":
                textColor = "text-secondary";
                break;
            case "Rejected":
                textColor = "text-danger";
                break;
            default:
                textColor = "text-dark";
                break;
        }

        return { textColor };
    };

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await userService.getWithdrawal(token)
            setDatas(response?.data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

    return (
        <DashboardLayout>

            <div class="row mt-5">
                <div class="col-12">
                    <div class="card">
                        {loading ? (
                            <div className="p-3">
                                <TableSkeletonLoader count={6} height={35} />
                            </div>
                        ) : (
                            <>
                                {data.length === 0 ? (
                                    <div className="p-3 text-center py-5">No Withdrawal Transactions Found</div>
                                ) : (
                                    <div class="table-responsive">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-dark text-xs font-weight-bolder opacity-7">Transaction ID</th>
                                                    <th class="text-uppercase text-dark text-xs font-weight-bolder opacity-7 ps-2">Amount</th>
                                                    <th class="text-uppercase text-dark text-xs font-weight-bolder opacity-7 ps-2">Status</th>
                                                    <th class="text-uppercase text-dark text-xs font-weight-bolder opacity-7 ps-2">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <EachElement of={data} render={(item) => (
                                                    <tr>
                                                        <td>
                                                            <div class="d-flex px-3 py-1">
                                                                <div class="d-flex flex-column justify-content-center">
                                                                    <h6 class="mb-0 text-sm"> {item.transaction_id} </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p class="text-sm text-dark mb-0"> <CurrencyFormatter amount={item.amount} /> </p>
                                                        </td>
                                                        <td>
                                                            <p class={`text-sm mb-0 ${getStatusStyles(item.status).textColor}`}> {item.status} </p>
                                                        </td>
                                                        <td>
                                                            <p class="text-sm text-dark mb-0"> {item.date} </p>
                                                        </td>
                                                    </tr>
                                                )} />
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}

export default WithdrawalHistory