import React, { useState, useEffect } from "react";
import { getAllUsers, deleteUser } from "../services/apiService";

const UserComponent = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      alert("User deleted successfully!");
      fetchUsers(); // Refresh users
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
