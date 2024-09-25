import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Header from './Header';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        <Header />

        <div className="overview-container">
          <div className="overview-card">
            <h3>Total Shipments</h3>
            <p>6,521</p>
            <span className="change positive">+1.3% vs Last Week</span>
          </div>
          <div className="overview-card">
            <h3>Total Orders</h3>
            <p>10,105</p>
            <span className="change negative">-2.1% vs Last Week</span>
          </div>
          <div className="overview-card">
            <h3>Revenue</h3>
            <p>$12,167</p>
            <span className="change positive">+1.3% vs Last Week</span>
          </div>
          <div className="overview-card">
            <h3>Delivered</h3>
            <p>1,840</p>
            <span className="change negative">-3.1% vs Last Week</span>
          </div>
        </div>

        <div className="ongoing-delivery-section">
          <div className="delivery-header">
            <h4>Ongoing Delivery</h4>
            <button className="filter-btn">Filter</button>
          </div>
          <div className="ongoing-delivery-container">
            <div className="shipment-item selected">
              <h4>Shipment #001234ABCD</h4>
              <p>87 Vern Ddu Lane → 15 Vicar Lane</p>
            </div>
            <div className="shipment-item">
              <h4>Shipment #002345LKH</h4>
              <p>40 Broomfield Place → 44 Helland Bridge</p>
            </div>
          </div>
          <div className="map-details">
            <h4>On the Way</h4>
            <img src="https://via.placeholder.com/400x200" alt="Map" />
            <div className="delivery-info">
              <p>Category: Electronic</p>
              <p>Distance: 60.41 km</p>
              <p>Estimation: 1d 16h</p>
              <p>Weight: 25kg</p>
              <p>Fee: $1,050</p>
            </div>
          </div>
        </div>

        <div className="tracking-order-section">
          <h4>Tracking Order</h4>
          <table className="tracking-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Category</th>
                <th>Arrival Time</th>
                <th>Weight</th>
                <th>Route</th>
                <th>Fee</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001234ABCD</td>
                <td>Electronic</td>
                <td>7/1/2023</td>
                <td>25kg</td>
                <td>87 Vern Ddu Lane → 15 Vicar Lane</td>
                <td>$1,050</td>
                <td>Delivered</td>
              </tr>
              <tr>
                <td>#002345LKH</td>
                <td>Furniture</td>
                <td>7/1/2023</td>
                <td>50kg</td>
                <td>40 Broomfield Place → 44 Helland Bridge</td>
                <td>$2,200</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

