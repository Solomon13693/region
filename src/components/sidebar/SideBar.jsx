import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import { useDispatch } from 'react-redux'
import { Logout } from '../../features/auth/authSlice'

const SiderBar = ({ open, setOpen }) => {

    const location = useLocation()

    const handleLinkClick = () => {
        setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    const dispatch = useDispatch()

    return (
        <>

            <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " style={{ zIndex: '100' }} id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <Link onClick={handleLinkClick} className="navbar-brand m-0" to='/dashboard'>
                        <img src={Logo} className="navbar-brand-img h-100" alt="main_logo" />
                    </Link>
                </div>
                <hr className="horizontal dark mt-0" />

                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link onClick={handleLinkClick} className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to='/dashboard' >
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link onClick={handleLinkClick} className={`nav-link ${location.pathname === '/deposit' ? 'active' : ''}`} to='/deposit'>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">

                                </div>
                                <span className="nav-link-text ms-1">Deposit</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link onClick={handleLinkClick} className={`nav-link ${location.pathname === '/withdraw' ? 'active' : ''}`} to='/withdraw'>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">

                                </div>
                                <span className="nav-link-text ms-1">Withdraw</span>
                            </Link>
                        </li>

                        <li className="nav-item mt-4">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-9">Account History</h6>
                        </li>

                        <li className="nav-item">
                            <Link onClick={handleLinkClick} className={`nav-link ${location.pathname === '/deposit/history' ? 'active' : ''}`} to='/deposit/history'>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                </div>
                                <span className="nav-link-text ms-1">Deposit History</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link onClick={handleLinkClick} className={`nav-link ${location.pathname === '/withdraw/history' ? 'active' : ''}`} to='/withdraw/history'>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                </div>
                                <span className="nav-link-text ms-1">Withdrawal History</span>
                            </Link>
                        </li>

                        <li className="nav-item mt-4">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-9">Account Settings</h6>
                        </li>


                        <li className="nav-item">
                            <Link onClick={handleLinkClick} className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} to='/profile'>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                </div>
                                <span className="nav-link-text ms-1">Profile</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="sidenav-footer mx-3 mt-5">

                    <button onClick={() => dispatch(Logout())} className="btn bg-gradient-info mt-3 w-100">Logout</button>
                </div>

            </aside>

        </>
    )
}

export default SiderBar