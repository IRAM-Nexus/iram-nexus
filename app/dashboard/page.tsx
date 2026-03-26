"use client";
import { useState } from "react";
export default function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="main-container">
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <div className="top-bar">
        <span className="menu-icon" onClick={() => setOpen(!open)}>
  ☰
</span>
        <h1 className="logo">IRAM Nexus</h1>
        <button className="connect-btn">
    Connect
  </button>

 </div>

 
      <div className="prize-card">
        <div className="prize-title">PRIZE POOL</div>
        <h2 className="prize-amount">$10,000.00</h2>
      </div>
      <div className={`sidebar ${open ? "show" : ""}`}>
  <div className="profile-icon">
  <img src="https://via.placeholder.com/50" alt="profile" />
</div>

<div className="divider"></div>

  <ul className="menu">
    <li>Profile</li>
    <li>Notifications</li>
    <li>IRAM Pulse</li>
    <li>Daily Tasks</li>
    <li>Create Tasks</li>
    <li>Rewards</li>
    <li>Support</li>
    <li>Policy</li>
    <li>About</li>
  </ul>

</div>


    </div>
  );
}