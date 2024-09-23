//call in this
import React, { useState } from 'react';
import DataTable from '../components/DataTable';

const User = () => {
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      userType: 'User',
      referenceBy: '8084077447',
      referenceCode: '9090909090',
    },
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      userType: 'User',
      referenceBy: '8084077447',
      referenceCode: '9090909090',
    },
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      userType: 'User',
      referenceBy: '8084077447',
      referenceCode: '9090909090',
    },
  ]);

  const headers = ['S. No.', 'Name', 'Email', 'User Type', 'Reference By', 'Reference Code'];

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
      <h1>User Dashboard</h1>
      <DataTable
        headers={headers}
        data={userWithSerialNo}
        onEdit={handleEdit}
        onDelete={handleDelete}
        userAction
      />
    </div>
  );
};

export default User;
