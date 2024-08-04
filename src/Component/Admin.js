import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Admin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import home1 from '../assets/images/home1.jpg';
import home2 from '../assets/images/home2.jpg';
import home3 from '../assets/images/home3.jpg';


function Admin() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    // Clear any user-related data (if applicable)
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="admin-dashboard">
      <header className="main-header">
        <i className="fas fa-bars menu-icon" onClick={toggleSidebar}></i>
        <h1>Admin Dashboard</h1>
        <div className="header-right">
          <select>
            <option>Last 30 days</option>
            <option>Last 60 days</option>
            <option>Last 90 days</option>
          </select>
          <input type="text" placeholder="Search" />
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle" onClick={toggleUserDropdown}></i>
          {isUserDropdownOpen && (
            <div className="user-dropdown">
              <div className="user-info">
                <img src={home1} alt="User Avatar" className="admin-avatar" />
                <p className="user-name">Nivetha</p>
                <p className="user-email">nivethabs2004@gmail.com</p>
                <button onClick={handleLogout} className="logout-button">Logout</button> {/* Add Logout button */}
              </div>
            </div>
          )}
        </div>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>ShopTimiz</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><i className="fas fa-tachometer-alt"></i> Dashboard</li>
            <li><i className="fas fa-th-list"></i> Categories</li>
            <li><i className="fas fa-users"></i> Users</li>
            <li><i className="fas fa-box"></i> Orders</li>
            <li><i className="fas fa-envelope"></i> Messages</li>
            <li><i className="fas fa-cog"></i> Settings</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <img src={home2} alt="User Avatar" className="admin-avatar" />
            <p>UdhayaSri</p>
            <p>thenralkaviya@gmail.com</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <section className="stats-section">
          <div className="stat-card pending-orders">
            <h3>Pending Orders</h3>
            <p>20</p>
          </div>
          <div className="stat-card active-orders">
            <h3>Active Orders</h3>
            <p>530</p>
          </div>
          <div className="stat-card delivered-orders">
            <h3>Delivered Orders</h3>
            <p>875</p>
          </div>
        </section>
        <section className="income-section">
          <div className="income-chart">
            <h3>Income</h3>
            <img src={home3} alt="Income Chart" />
          </div>
          <div className="earnings-item">
            <h3>Earnings by Item</h3>
            <img src={home1} alt="Earnings by Item Chart" />
          </div>
        </section>
        <section className="product-list">
          <h3>Product List</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="product-info">
                    <p>Cabbage</p>
                    <img src={home2} alt="Cabbage" />
                  </div>
                </td>
                <td>30 in stock</td>
                <td>$32.00</td>
                <td>4.8 (45 votes)</td>
              </tr>
              <tr>
                <td>
                  <div className="product-info">
                    <p>Cooker</p>
                    <img src={home3} alt="Cooker" />
                  </div>
                </td>
                <td>56 in stock</td>
                <td>$32.00</td>
                <td>4.8 (45 votes)</td>
              </tr>
              <tr>
                <td>
                  <div className="product-info">
                    <p>Kiwi</p>
                    <img src={home1} alt="Kiwi" />
                  </div>
                </td>
                <td>72 in stock</td>
                <td>$32.00</td>
                <td>4.8 (45 votes)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Admin;