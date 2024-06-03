import React, { useState } from 'react'
import DepositModal from './DepositModal';

const PreviewDeposit = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <>

      <div className="col-12 col-md-8 col-xl-6 mt-md-0 pt-4">
        <div className="card h-100 p-3">
          <div className="card-header pb-0">
            <div className="row">
              <div className="col-md-8 d-flex align-items-center">
                <h6 className="mb-0 font-weight-bolder">Please confirm your deposit:</h6>
              </div>
            </div>
          </div>

          <div className="card-body">
            <p className="text-base font-italic font-weight-bold text-dark">
              How to Complete Your Deposit:
            </p>

            <ol className="text-dark text-sm">
              <li className='mb-2'>Submit Your Deposit Request: Once you've initiated your deposit request, our administrative team will promptly receive it.</li>
              <li className='mb-2'>Admin Confirmation: Our team will contact you to confirm receipt of your deposit request and provide further instructions.</li>
              <li className='mb-2'>Make Payment: Proceed to make the payment as instructed by our administrative team.</li>
              <li className='mb-2'>Crediting Your Account: Once your payment is successfully processed, your account will be credited with the deposited amount.</li>
            </ol>

            <hr className="horizontal mt-3" />

            <button onClick={() => setOpen(true)} class="btn bg-gradient-dark mb-0">Fund Wallet</button>

          </div>


        </div>
      </div>

      <DepositModal open={open} setOpen={setOpen} />

    </>
  );
};

export default PreviewDeposit;
