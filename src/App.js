import React, { useState } from 'react';
import ReceiptForm from './components/ReceiptForm';
import Receipt from './components/Receipt';
import PrintButton from './components/PrintButton';

function App() {
  const [receiptData, setReceiptData] = useState(null);
  const [activeTables, setActiveTables] = useState([]);

  const handleNewReceipt = (data) => {
    setReceiptData(data);
    setActiveTables((prev) => [...prev, data.table]);
  };

  return (
    <div>
      <h1>ระบบใบเสร็จเกมสนุกเกอร์</h1>
      <p>โต๊ะที่กำลังใช้งาน: {activeTables.length}</p>
      <ReceiptForm onSubmit={handleNewReceipt} />
      {receiptData && (
        <>
          <Receipt data={receiptData} />
          <PrintButton />
        </>
      )}
    </div>
  );
}

export default App;
