import React, { useState } from 'react';

const ReceiptForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    playerName: '',
    phone: '',
    table: '',
    startTime: '',
    duration: '',
    rate: '',
  });

  const [items, setItems] = useState([
    { name: '', unit: '', quantity: 1, price: '' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = field === 'quantity' || field === 'price' ? parseFloat(value) : value;
    setItems(updated);
  };

  const addItemRow = () => {
    setItems([...items, { name: '', unit: '', quantity: 1, price: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = new Date(formData.startTime);
    const end = new Date(start.getTime() + parseFloat(formData.duration) * 60 * 60 * 1000);

    onSubmit({
      ...formData,
      rate: parseFloat(formData.rate),
      startTime: formData.startTime,
      endTime: end.toISOString(),
      items: items.map(item => ({
        ...item,
        total: item.quantity * item.price
      }))
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="playerName" value={formData.playerName} onChange={handleChange} placeholder="ชื่อผู้เล่น" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="เบอร์โทรศัพท์" required />
      <input name="table" value={formData.table} onChange={handleChange} placeholder="โต๊ะหมายเลข" required />
      <input name="startTime" type="datetime-local" value={formData.startTime} onChange={handleChange} required />
      <input name="duration" type="number" step="0.1" value={formData.duration} onChange={handleChange} placeholder="ระยะเวลา (ชม.)" required />
      <input name="rate" type="number" step="0.01" value={formData.rate} onChange={handleChange} placeholder="ราคา/ชั่วโมง" required />

      <h4>รายการเพิ่มเติม</h4>
      {items.map((item, index) => (
        <div key={index}>
          <input placeholder="ชื่อรายการ" value={item.name} onChange={(e) => handleItemChange(index, 'name', e.target.value)} />
          <input placeholder="หน่วย (เช่น ขวด)" value={item.unit} onChange={(e) => handleItemChange(index, 'unit', e.target.value)} />
          <input type="number" min="1" placeholder="จำนวน" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} />
          <input type="number" step="0.01" placeholder="ราคาต่อหน่วย" value={item.price} onChange={(e) => handleItemChange(index, 'price', e.target.value)} />
        </div>
      ))}
      <button type="button" onClick={addItemRow}>➕ เพิ่มรายการ</button>
      <br />
      <button type="submit">สร้างใบเสร็จ</button>
    </form>
  );
};

export default ReceiptForm;
