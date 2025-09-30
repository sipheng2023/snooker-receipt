import React from 'react';
import '../styles/receipt.css';

const Receipt = ({ data }) => {
  const { playerName, phone, table, startTime, endTime, rate, items } = data;
  const duration = (new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60);
  const gameTotal = duration * rate;
  const itemTotal = items?.reduce((sum, item) => sum + item.total, 0) || 0;
  const total = gameTotal + itemTotal;

  return (
    <div className="receipt">
      <h2>ใบเสร็จเกมสนุกเกอร์</h2>
      <p>ชื่อผู้เล่น: {playerName}</p>
      <p>เบอร์โทรศัพท์: {phone}</p>
      <p>โต๊ะหมายเลข: {table}</p>
      <p>เวลาเริ่ม: {new Date(startTime).toLocaleString()}</p>
      <p>เวลาสิ้นสุด: {new Date(endTime).toLocaleString()}</p>
      <p>ระยะเวลา: {duration.toFixed(2)} game</p>
      <p>อัตราค่าบริการ: ฿{rate}/game</p>
      <p>รวมค่าบริการเกม: ฿{gameTotal.toFixed(2)}</p>

      {items?.length > 0 && (
        <>
          <h4>รายการเพิ่มเติม</h4>
          <table>
            <thead>
              <tr>
                <th>ชื่อรายการ</th>
                <th>หน่วย</th>
                <th>จำนวน</th>
                <th>ราคาต่อหน่วย</th>
                <th>รวม</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
                  <td>฿{item.price.toFixed(2)}</td>
                  <td>฿{item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>รวมรายการเพิ่มเติม: ฿{itemTotal.toFixed(2)}</p>
        </>
      )}

      <h3>รวมทั้งสิ้น: ฿{total.toFixed(2)}</h3>
    </div>
  );
};

export default Receipt;
