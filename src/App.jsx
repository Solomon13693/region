import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute';
import AuthLayout from './utils/AuthLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import ErrorPage from './pages/ErrorPage';
import Deposit from './pages/Deposit';
import { Toaster } from 'react-hot-toast';
import Withdraw from './pages/Withdraw';
import Profile from './pages/Profile';
import DepositHistory from './pages/DepositHistory';
import WithdrawalHistory from './pages/WithdrawalHistory';

const App = () => {
  
  return (
    <>

      <Routes>

        <Route path="/" element={<AuthLayout />}>

          {/* AUTHENTICATIONS */}
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>

            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Route path='/deposit/history' element={<DepositHistory />} />
            <Route path='/withdraw/history' element={<WithdrawalHistory />} />
            <Route path='/profile' element={<Profile />} />

          </Route>


        </Route>

        <Route path="*" element={<ErrorPage />} />

      </Routes>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </>
  )
}

export default App