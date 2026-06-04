"use client";
import { useState } from "react";
import { ethers } from "ethers";
import Sidebar from "../components/layout/Sidebar";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import {
  useAccount,
  useDisconnect,
  useReadContract,
} from "wagmi";
export default function Dashboard() {
  const { open: openModal } =
  useWeb3Modal();

const {
  isConnected,
  address,
} = useAccount();

const { disconnect } =
  useDisconnect();
  const { data: iramBalance } =
  useReadContract({

    address:
      "0x4199f45c8e45345ba70f7914ecd2138356fd5618",

    abi: [
      {
        constant: true,

        inputs: [
          {
            name: "_owner",
            type: "address",
          },
        ],

        name: "balanceOf",

        outputs: [
          {
            name: "balance",
            type: "uint256",
          },
        ],

        stateMutability: "view",

        type: "function",
      },
    ],

    functionName: "balanceOf",

    args: [address || "0x0000000000000000000000000000000000000000"],

  });
  

  const [open, setOpen] = useState(false);
const [balance, setBalance] = useState(120);
const [showWallets, setShowWallets] =
useState(false);
const connectMetaMask = async () => {

  if (!window.ethereum) {

    alert("Please install MetaMask");

    return;
  }

  try {

    const provider =
      new ethers.BrowserProvider(window.ethereum);

    const accounts =
      await provider.send(
        "eth_requestAccounts",
        []
      );

    const address = accounts[0];

    localStorage.setItem(
      "walletAddress",
      address
    );

    window.location.reload();

  } catch (error) {

    console.log(error);

  }
};


  return (
    <div className="dashboard-page main-container">
      <Sidebar open={open} />
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <div className="top-bar">
        <span className="menu-icon" onClick={() => setOpen(!open)}>
  ☰
</span>
        <h1 className="logo">IRAM Nexus</h1>
       <button
  className="connect-btn"
  onClick={() => openModal()}
>

  {isConnected
    ? `${address?.slice(0,6)}...${address?.slice(-4)}`
    : "Connect"}

</button>

 </div>

 
      <div className="prize-card">
        <div className="prize-title">PRIZE POOL</div>
        <h2 className="prize-amount">$100,000.00</h2>
      </div>
      <div className="balance-bar">
    Balance:

{iramBalance
  ? Number(iramBalance) / 1e18
  : 0}

IRAM - Rank: Gold
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