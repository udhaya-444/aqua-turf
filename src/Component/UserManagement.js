import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', role: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  useEffect(() => {
    axios.get('http://localhost:8080/login')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
        setError('There was an error fetching the users.');
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };

  const addUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', newUser)
      .then(response => {
        setUsers([...users, response.data.login]);
        setNewUser({ username: '', email: '', password: '', role: '' });
        setError(null);
        setSuccess('User added successfully.');
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
        setError('There was an error adding the user.');
        setSuccess(null);
      });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/login/${id}`)
      .then(response => {
        setUsers(users.filter(user => user.id !== id));
        setError(null);
        setSuccess('User deleted successfully.');
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
        setError('There was an error deleting the user.');
        setSuccess(null);
      });
  };

  return (
    <div className="user-manage">
      <AdminNavbar />
      <h1>User Management</h1>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      
      {showForm && (
        <div className="form-container">
          <form onSubmit={addUser} className="add-user-form">
            <span onClick={() => setShowForm(false)} className="close-icon">
              <i className="fas fa-times"></i>
            </span>
            <h2>Add New User</h2>
            <label>
              Username:
              <input type="text" name="username" value={newUser.username} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={newUser.email} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={newUser.password} onChange={handleChange} required />
            </label>
            <label>
              Role:
              <input type="text" name="role" value={newUser.role} onChange={handleChange} required />
            </label>
            <button type="submit" className="add-button">Add User</button>
          </form>
        </div>
      )}

      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} className="delete-button">Delete</button>
                <button onClick={() => setShowForm(prev => !prev)} className="add-button">
                  {showForm ? 'Cancel' : 'Add User'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
