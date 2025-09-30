import PrintButton from './components/PrintButton';

{receiptData && (
  <>
    <Receipt data={receiptData} />
    <PrintButton />
  </>
)}
// Home.js
import React from 'react';
import ReceiptForm from '../components/ReceiptForm';
import Receipt from '../components/Receipt';
import PrintButton from '../components/PrintButton';
import { useState } from 'react';

const Home = () => {
  const [receiptData, setReceiptData] = useState(null);

  return (
    <div>
      <h1>ระบบใบเสร็จเกมสนุกเกอร์</h1>
        <ReceiptForm onSubmit={setReceiptData} />
        {receiptData && (
          <>
            <Receipt data={receiptData} />  
            <PrintButton />
          </>
        )}
    </div>
  );
}   
export default Home;