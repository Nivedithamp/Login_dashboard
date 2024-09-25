import { useState } from 'react';
import './OngoingDelivery.css'; 
import map1 from "./assets/map1.png"; 
import map2 from "./assets/map2.png";
import map3 from "./assets/map3.png";
import truck from "./assets/truck.png";
import truck2 from "./assets/truck2.png";

function OngoingDelivery() {
  const shipments = [
    {
      id: '001234ABCD',
      route: '87 Vern Ddu Lane → 15 Vicar Lane',
      category: 'Electronic',
      distance: '60.41 km',
      estimation: '1d 16h',
      weight: '25kg',
      fee: '$1,050',
      mapImage: map1,
    },
    {
      id: '0023456LKH',
      route: '40 Broomfield Place → 44 Helland Bridge',
      category: 'Furniture',
      distance: '45.60 km',
      estimation: '2d 6h',
      weight: '50kg',
      fee: '$2,200',
      mapImage: map2,
    },
    {
      id: '003456KLC',
      route: '11 Walden Road → 39 Grenoble Road',
      category: 'Clothing',
      distance: '30.25 km',
      estimation: '3d 12h',
      weight: '15kg',
      fee: '$800',
      mapImage: map3,
    },
    {
        id: '004567HJP',
        route: '88 White Road → 99 Black Lane',
        category: 'Grocery',
        distance: '75.30 km',
        estimation: '4d 1h',
        weight: '40kg',
        fee: '$1,500',
        mapImage: map1,
      },
      {
        id: '005678PQR',
        route: '123 Blue Street → 456 Red Avenue',
        category: 'Books',
        distance: '10.10 km',
        estimation: '5d 3h',
        weight: '10kg',
        fee: '$500',
        mapImage: map2,
      },
      {
        id: '006789TYU',
        route: '77 Greenfield Park → 9 Yellow Lane',
        category: 'Machinery',
        distance: '120.50 km',
        estimation: '6d 10h',
        weight: '100kg',
        fee: '$3,200',
        mapImage: map3,
      },
      {
        id: '007890WER',
        route: '14 Redrock Ave → 30 River Road',
        category: 'Pharmaceuticals',
        distance: '15.75 km',
        estimation: '8h 45m',
        weight: '5kg',
        fee: '$2,000',
        mapImage: map1,
      }
  ];

  const [selectedShipment, setSelectedShipment] = useState(shipments[0]);

  const handleShipmentClick = (shipment) => {
    setSelectedShipment(shipment);
  };

  return (
    <div className="delivery-page-container">

      <div className="shipment">
        <div className='left'>
            <p>Overview</p>
            <p>Tracking</p>
        </div>
        <div className='right'>
            <p>Week</p>
            <p>+ New Shipment</p>
        </div>
      </div>

      <div className="overview-container">
        <div className="overview-card">
          <div className="overview-card-header">
            <img src={truck} alt="Truck icon" />
            <h3>Total Shipments</h3>
          </div>
          <p>6,521</p>
          <span className="change positive">+1.3% vs Last Week</span>
        </div>
        <div className="overview-card">
          <div className="overview-card-header">
            <img src={truck} alt="Truck icon" />
            <h3>Total Shipments</h3>
          </div>
          <p>10,105</p>
          <span className="change negative">-2.1% vs Last Week</span>
        </div>
        <div className="overview-card">
          <div className="overview-card-header">
            <img src={truck} alt="Truck icon" />
            <h3>Total Shipments</h3>
          </div>
          <p>$12,167</p>
          <span className="change positive">+1.3% vs Last Week</span>
        </div>
        <div className="overview-card">
          <div className="overview-card-header">
            <img src={truck} alt="Truck icon" />
            <h3>Total Shipments</h3>
          </div>
          <p>1,840</p>
          <span className="change negative">-3.1% vs Last Week</span>
        </div>
      </div>

      {/* Ongoing Delivery Section */}
      <div className="ongoing-delivery-container">
        <div className="shipment-list">
          {shipments.map((shipment) => (
            <div
              key={shipment.id}
              className={`shipment-item ${shipment.id === selectedShipment.id ? 'selected' : ''}`}
              onClick={() => handleShipmentClick(shipment)}
            >
              <div className="shipment-details">
                 <div className="shipment-text">
                    <h4>Shipment #{shipment.id}</h4>
                     <p>{shipment.route}</p>
                </div>
                <img src={truck2} alt="Truck icon" className="shipment-icon" />
              </div>
            </div>
          ))}
        </div>

        <div className="map-section">
          <h4>Details for Shipment #{selectedShipment.id}</h4>
          <img
            src={selectedShipment.mapImage}
            alt={`Map for ${selectedShipment.id}`}
            className="map-image"
          />
          <div className="map-details">
            <div className="map-detail">
              Category: <span>{selectedShipment.category}</span>
            </div>
            <div className="map-detail">
              Distance: <span>{selectedShipment.distance}</span>
            </div>
            <div className="map-detail">
              Estimation: <span>{selectedShipment.estimation}</span>
            </div>
            <div className="map-detail">
              Weight: <span>{selectedShipment.weight}</span>
            </div>
            <div className="map-detail">
              Fee: <span>{selectedShipment.fee}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OngoingDelivery;
