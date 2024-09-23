//call in this
import React, { useState } from 'react';
import DataTable from '../components/DataTable';

const OrderHistory = () => {
  const [users, setUsers] = useState([
    {
      Address: 'John Doe',
      Paymentmode: 'johndoe@gmail.com',
      orderDatetime: 'User',
      SubTotal: '8084077447',
      GrandTotal: '9090909090',
    },
    {
      Address: 'John Doe',
      Paymentmode: 'johndoe@gmail.com',
      orderDatetime: 'User',
      SubTotal: '8084077447',
      GrandTotal: '9090909090',
    },
    {
      Address: 'John Doe',
      Paymentmode: 'johndoe@gmail.com',
      orderDatetime: 'User',
      SubTotal: '8084077447',
      GrandTotal: '9090909090',
    },
  ]);

  const headers = ['S. No.', 'Address', 'Paymentmode', 'order Date and time', 'Sub Total', 'Grand Total'];

  const handleEdit = (index) => {
    // Logic for editing user at index
    console.log(`Edit user at index: ${index}`);
  };

  const handleDelete = (index) => {
    // Logic for deleting user at index
    console.log(`Delete user at index: ${index}`);
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const userWithSerialNo = users.map((user, index) => ({
    ...user,
    serialNo: index + 1
  }));

  return (
    <div className="dashboard">
      <h1>Order History</h1>
      <DataTable
        headers={headers}
        data={userWithSerialNo}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default OrderHistory;
