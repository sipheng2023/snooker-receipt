import React from 'react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button onClick={handlePrint} style={{ marginTop: '20px' }}>
      🖨️ พิมพ์ใบเสร็จ
    </button>
  );
};

export default PrintButton;
