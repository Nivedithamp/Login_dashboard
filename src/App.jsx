import React, { useState } from "react";
import OngoingDelivery from "./OngoingDelivery";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import './App.css'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />  
      ) : (
        <>
          <Sidebar />  
          <div className="main-content">
            <Header />
            <OngoingDelivery />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
