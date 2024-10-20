// import React from 'react';

// const SuccessPage = () => {
//   return (
//     <div style={styles.container}>
//       <h1>Payment Successful!</h1>
//       <p>Thank you for your payment. Your transaction was successful.</p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f4f7',
//     color: '#333',
//     textAlign: 'center',
//   },
// };

// export default SuccessPage;


import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const paymentId = location.state?.paymentId; 

  return (
    <div style={styles.container}>
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. Your transaction was successful.</p>
      {paymentId && (
        <p>
          Your Payment ID for reference:{" "}
          <strong style={styles.paymentId}>{paymentId}</strong>
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f4f7",
    color: "#333",
    textAlign: "center",
  },
  paymentId: {
    color: "red", 
  },
};

export default SuccessPage;
