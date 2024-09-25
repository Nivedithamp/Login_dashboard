import './Sidebar.css';  
import person from './assets/person.png'
import logo from './assets/logo.png'
import { FaHome, FaBox, FaShoppingCart, FaEnvelope, FaUsers, FaCog, FaTag, FaDollarSign } from 'react-icons/fa'; 

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="FreightFlow Logo" className="sidebar-logo" />
        <div className="user-info">
          <img src={person} alt="User Avatar" className="user-avatar" />
          <div className="user-details">
            <p className="user-name">Ismael Maddox</p>
            <p className="user-plan">Free plan</p>
          </div>
        </div>
      </div>

      <nav className="sidebar-menu">
        <p className="menu-heading">MAIN MENU</p>
        <ul>
          <li className="menu-item active">
            <FaHome className="menu-icon" />
            Dashboard
          </li>
          <li className="menu-item">
            <FaBox className="menu-icon" />
            Shipments
          </li>
          <li className="menu-item">
            <FaShoppingCart className="menu-icon" />
            Orders
            <span className="menu-notification">4</span>
          </li>
          <li className="menu-item">
            <FaEnvelope className="menu-icon" />
            Messages
            <span className="menu-notification">9+</span>
          </li>
          <li className="menu-item">
            <FaUsers className="menu-icon" />
            Customers
          </li>
          <li className="menu-item">
            <FaCog className="menu-icon" />
            Help & Support
          </li>
          <li className="menu-item">
            <FaCog className="menu-icon" />
            Settings
          </li>
        </ul>

        <p className="menu-heading">PAYMENT</p>
        <ul>
          <li className="menu-item">
            <FaTag className="menu-icon" />
            Taxes
          </li>
          <li className="menu-item">
            <FaDollarSign className="menu-icon" />
            Payments
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="plan-upgrade">
          <FaTag className="plan-icon" />
          <div>
            <p className="upgrade-text">Upgrade & Unlock all features</p>
            <button className="manage-plan-btn">Manage your plan →</button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
