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
      <div className="balance-bar">
    Balance: 120 IRAM - Rank: Gold
  </div>

  <div className="follow-card">
  <div className="follow-left">
  <span>Follow</span>
  <span className="x-text">𝕏</span>
</div>

<div className="follow-right">
  <span>5 IRAM</span>
  <button className="claim-btn">Claim</button>
</div>
</div>

{/* Join Telegram */}
  <div className="follow-card telegram-card">

  <div className="follow-left">
    <span>Join TG&nbsp;&nbsp;&nbsp;</span>
  </div>

  <div className="follow-right">
    <span className="reward">3 IRAM</span>
    <button className="claim-btn">Claim</button>
  </div>

</div>

</div>
      
  );
}