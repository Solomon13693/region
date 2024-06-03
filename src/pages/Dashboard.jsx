import React, { useEffect } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Overview from '../components/Overview'
import RecentTransactions from '../components/RecentTransactions'
import { useDispatch, useSelector } from 'react-redux'
import { getWallet } from '../features/slice/extraSlice'
import { fetchWallet } from '../features/thunks/extraThunks'

const Dashboard = () => {

  const wallet = useSelector(getWallet)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchWallet())
  }, [dispatch])
  

  return (
    <DashboardLayout>

        <Overview wallet={wallet} />

        <RecentTransactions datas={wallet?.recent_transactions} />

    </DashboardLayout>
  )
}

export default Dashboard