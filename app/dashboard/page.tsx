"use client";
import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
export default function Dashboard() {

  const [open, setOpen] = useState(false);
const [balance, setBalance] = useState(120);


  return (
    <div className="main-container">
      <Sidebar open={open} />
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
      
  
      </div>
  );
}