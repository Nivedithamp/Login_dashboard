import './Header.css'; 
import person from './assets/person.png'
import person2 from './assets/person2.png'
import person3 from './assets/person3.png'

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="profile-images">
          <img src={person} alt="Profile 1" />
          <img src={person2} alt="Profile 2" />
          <img src={person3} alt="Profile 3" />
          <span>+40</span> 
        </div>
        <p>Eng</p>
        <div className="header-icons">
          <span className="icon">🔔</span>
          <span className="icon">🔍</span>
          <span className="icon">⚙️</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
