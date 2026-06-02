"use client";

import "./trade.css";
import {useAccount} from "wagmi";
import { useState, useEffect } from "react";
import { FileText, Settings2 } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import {
  Route,
  TrendingUp,
  ShieldCheck,
  Percent,
  Download,
  ChevronRight,
  House,
  ChartColumn,
  ArrowLeftRight,
  Wallet,
  Grid2x2,
} from "lucide-react";
import { useRouter } from "next/navigation";


export default function TradePage() {
    const router = useRouter();

    const [activeNav, setActiveNav] = useState("trade");
    
const [activeTab, setActiveTab] = useState("swap");
    const { address, isConnected } = useAccount();

 const [showHistory, setShowHistory] = useState(false);
const [showSettings, setShowSettings] = useState(false); 
  
  
  
    return (
<div className="mobileOnly">

  


    <div className="tradePage">

  <div className="tradeTopCard">
<img
    src="/images/iram-header.png"
    alt="IRAM Nexus"
    className="tradeHeaderImage"
  />
  


  </div>
<div className="iramText">
    IRAM <span>NEXUS</span>
  
  
  
  </div>
<div className="walletBox">

  <span
    className={`walletDot ${
      isConnected ? "connected" : "disconnected"
    }`}
  ></span>

  {isConnected
    ? `${address?.slice(0,6)}...${address?.slice(-4)}`
    : "Connect Wallet"}



</div>
<div className="tradeTabs">

  <button
    className={`tabBtn ${activeTab === "swap" ? "active" : ""}`}
    onClick={() => setActiveTab("swap")}
  >
    Swap
  </button>

  <button
    className={`tabBtn ${activeTab === "chart" ? "active" : ""}`}
    onClick={() => setActiveTab("chart")}
  >
    Chart
  </button>

  <button
  className={`tabBtn ${
    activeTab === "markets" ? "active" : ""
  }`}
  onClick={() => router.push("/market")}
>
  Markets
</button>

  <button
    className={`tabBtn ${activeTab === "position" ? "active" : ""}`}
    onClick={() => setActiveTab("position")}
  >
    My Position
  </button>
<button
  className="actionIcon"
  onClick={() => setShowHistory(true)}
>
  <FileText size={16} />
</button>

<button
  className="actionIcon"
  onClick={() => setShowSettings(true)}
>
  <Settings2 size={16} />
</button>

</div>
<div className="mainTradeCard">
<div className="fromText">From</div>
<div className="balanceBox">
    <span className="balanceText">
      Balance: 0.0004191 BNB
    </span>

    <span className="maxText">
      MAX
    </span>
  </div>
<div className="tokenCard">

  <div className="tokenLeft">

    <img
      src="/images/bnb.png"
      alt="BNB"
      className="tokenLogo"
    />

    <div>
      <div className="tokenName">
        BNB ▼
      </div>

      <div className="tokenChain">
        BNB Chain
      </div>
    </div>

  </div>

  <div className="tokenRight">

    <div className="tokenAmount">
      1
    </div>

    <div className="tokenUsd">
      ≈ $192,504.57
    </div>

  </div>

</div>
<div className="swapDivider">

  <div className="dividerLine"></div>

  <div className="swapCircle">
  <ArrowUpDown size={16} />
</div>

  <div className="dividerLine"></div>

</div>
<div className="toHeader">

  <span className="toText">
    To (You receive)
  </span>

  <span className="toBalance">
    Balance: 5,693.28985 IRAM
  </span>

</div>
<div className="iramCard">

  <div className="iramLeft">

    <img
      src="/images/iram-logo.png"
      alt="IRAM"
      className="iramLogo"
    />

    <div>

      <div className="iramName">
        IRAM ▼
      </div>

      <div className="iramToken">
        IRAM Token
      </div>

    </div>

  </div>

  <div className="iramRight">

    <div className="iramAmount">
      453,428.653526
    </div>

    <div className="iramUsd">
      ≈ $192,504.57 (0%)
    </div>

  </div>

</div>
<div className="priceImpactCard">

  <div className="impactIcon">
    !
  </div>

  <div className="impactContent">

    <div className="impactText">
      Price impact is low. You will receive at least
    </div>

    <div className="impactAmount">
      448,894.36699 IRAM
      <span className="infoIcon">ⓘ</span>
    </div>

  </div>

</div>

<div className="swapDetailsCard">

  <div className="detailRow">
    <div className="detailLeft">
      <div className="icon purple">
        <Route size={20} />
      </div>
      <span>Route</span>
    </div>

    <div className="detailRight">
      <span>IRAM Nexus Router</span>
      <span className="bestTag">Best</span>
      <ChevronRight size={18} />
    </div>
  </div>

  <div className="detailRow">
    <div className="detailLeft">
      <div className="icon blue">
        <TrendingUp size={20} />
      </div>
      <span>Rate</span>
    </div>

    <div className="detailRight">
      <span>1 BNB ≈ 453,428.65352 IRAM</span>
    </div>
  </div>

  <div className="detailRow">
    <div className="detailLeft">
      <div className="icon green">
        <ShieldCheck size={20} />
      </div>
      <span>Slippage</span>
    </div>

    <div className="detailRight">
      <span>Auto | 1%</span>
      <ChevronRight size={18} />
    </div>
  </div>

  <div className="detailRow">
    <div className="detailLeft">
      <div className="icon purple">
        <Percent size={20} />
      </div>
      <span>IRAM Nexus Fee</span>
    </div>

    <div className="detailRight">
      <span>0.6%</span>
      <ChevronRight size={18} />
    </div>
  </div>

  <div className="detailRow">
    <div className="detailLeft">
      <div className="icon blue">
        <Download size={20} />
      </div>
      <span>Min. Received</span>
    </div>

    <div className="detailRight">
      <span>448,894.36699 IRAM</span>
    </div>
  </div>

  <div className="detailRow">
    <div className="detailLeft">
      <div className="icon orange">
        <TrendingUp size={20} />
      </div>
      <span>Price Impact</span>
    </div>

    <div className="detailRight">
      <span className="greenValue">0.12%</span>
    </div>
  </div>

</div>

<button className="swapBtn">

  <span className="swapBtnTitle">
    Swap
  </span>

  <span className="swapBtnRate">
    1 BNB → 453,428.653526 IRAM
  </span>

</button>


</div>
<div className="poweredBy">
  <img
    src="/images/iram-logo.png"
    alt="IRAM"
    className="poweredLogo"
  />

  <span>
    Powered by <b>IRAM Nexus</b>
  </span>
</div>

<div className="bottomtradeNav">

  <button
    className={`navItem ${
      activeNav === "home" ? "activeNav" : ""
    }`}
    onClick={() => setActiveNav("home")}
  >
    <House size={22} />
    <span>Home</span>
  </button>

  <button
  className={`navItem ${
    activeNav === "markets" ? "activeNav" : ""
  }`}
  onClick={() => {
    setActiveNav("markets");
    router.push("/market");
  }}
>
  <ChartColumn size={22} />
  <span>Markets</span>
</button>

  <button
    className={`navItem ${
      activeNav === "trade" ? "activeNav" : ""
    }`}
    onClick={() => setActiveNav("trade")}
  >
    <ArrowLeftRight size={22} />
    <span>Trade</span>
  </button>

  <button
    className={`navItem ${
      activeNav === "portfolio" ? "activeNav" : ""
    }`}
    onClick={() => setActiveNav("portfolio")}
  >
    <Wallet size={22} />
    <span>Portfolio</span>
  </button>

  <button
    className={`navItem ${
      activeNav === "more" ? "activeNav" : ""
    }`}
    onClick={() => setActiveNav("more")}
  >
    <Grid2x2 size={22} />
    <span>More</span>
  </button>

</div>
</div>
 </div> 

  );
}