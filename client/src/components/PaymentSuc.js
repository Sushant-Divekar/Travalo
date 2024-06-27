// import React from 'react'
// import { useSearchParams } from 'react-router-dom'
// import './PaymentSuc.scss'
// const PaymentSuc = () => {

//     const searchQuery= useSearchParams()[0];

//     const referenceNum = searchQuery.get("reference")
//   return (
//     <div>
//       PaymentSuccess
//       <p>Reference No. :{referenceNum} </p>
//     </div>
//   )
// }

// export default PaymentSuc

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './PaymentSuc.scss';

const PaymentSuc = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");

  return (
    <div className="payment-success">
      <div className="message">
        <h1>Payment Successful!</h1>
        <p>Your payment has been processed successfully.</p>
        <div className="reference-number">
          Reference No.: {referenceNum}
        </div>
      </div>
    </div>
  );
};

export default PaymentSuc;

