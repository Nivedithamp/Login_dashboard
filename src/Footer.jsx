
import './Footer.css';

function Footer() {
  const orders = [
    {
      id: '#001234ABCD',
      category: 'Electronic',
      arrivalTime: '7/1/2023',
      weight: '25kg',
      route: '87 Vern Ddu Lane → 15 Vicar Lane',
      fee: '$1,050',
      status: 'Delivered',
      statusClass: 'delivered',
    },
    {
      id: '#0023456LKH',
      category: 'Furniture',
      arrivalTime: '7/1/2023',
      weight: '50kg',
      route: '40 Broomfield Place → 44 Helland Bridge',
      fee: '$2,200',
      status: 'Pending',
      statusClass: 'pending',
    },
    {
      id: '#003456KLH',
      category: 'Clothing',
      arrivalTime: '7/1/2023',
      weight: '50kg',
      route: '11 Walden Road → 39 Grenoble Road',
      fee: '$800',
      status: 'Shipping',
      statusClass: 'shipping',
    },
  ];

  return (
    <div className="tracking-order-section">
      <div className="tracking-order-header">
        <h4>Tracking Order</h4>
        <div className="tracking-order-actions">
          <input type="text" placeholder="Search..." className="search-box" />
          <button className="filter-btn">Filter</button>
          <button className="export-btn">Exports</button>
        </div>
      </div>
      <table className="tracking-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
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
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{order.id}</td>
              <td>{order.category}</td>
              <td>{order.arrivalTime}</td>
              <td>{order.weight}</td>
              <td>{order.route}</td>
              <td>{order.fee}</td>
              <td>
                <span className={`status ${order.statusClass}`}>{order.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Footer;
