import React from 'react'

const Footer = () => {
    return (
        <footer class="footer pt-5">
            <div class="container-fluid">
                <div class="row align-items-center justify-content-lg-between">
                    <div class="col-lg-6 mb-lg-0 mb-4">
                        <div class="copyright text-center text-sm text-muted text-lg-start">
                            ©  {new Date().getFullYear()}
                             <span className='ms-1'>Regions Bank</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer