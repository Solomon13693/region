import React, { useState } from 'react';
import SideBar from './sidebar/SideBar';
import NavBar from './NavBar';
import Footer from './Footer';

const DashboardLayout = ({ children }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className={`g-sidenav-show bg-gray-100 ${open && 'g-sidenav-pinned'}`}>

            <SideBar open={open} setOpen={setOpen} />

            <main className="main-content position-relative min-height-vh-100 h-100 border-radius-lg ">

                <NavBar open={open} setOpen={setOpen} />

                <div className="container-fluid py-4">

                    {children}

                    <Footer />

                </div>

            </main>

        </div>
    )
}

export default DashboardLayout;
