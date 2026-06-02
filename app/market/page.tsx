"use client";

import "./market.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { FiStar, FiBell } from "react-icons/fi";
import { useRef } from "react";
import {
  createChart,
  CandlestickSeries,
} from "lightweight-charts";

export default function MarketPage() {

  const router = useRouter();

  const [holders, setHolders] = useState("51");
  const [marketCap, setMarketCap] = useState("Loading...");
  const [liquidity, setLiquidity] = useState("Loading...");
  const [iramPrice, setIramPrice] = useState("Loading...");
const [high24h, setHigh24h] = useState("0.00013494");
const [low24h, setLow24h] = useState("0.00012950");  
const [volume24h, setVolume24h] = useState("0");
const chartRef = useRef<HTMLDivElement>(null);


useEffect(() => {

    const fetchPrice = async () => {

      try {

        const provider = new ethers.JsonRpcProvider(
          "https://bsc-dataseed.binance.org"
        );

        const pairAddress =
          "0x9cAE9A6D03D069A519485Bcc9c8fa9123f379EB0";

        const abi = [
          "function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)"
        ];

        const pairContract = new ethers.Contract(
          pairAddress,
          abi,
          provider
        );

        const reserves = await pairContract.getReserves();

        const reserve0 = Number(
          ethers.formatUnits(reserves[0], 18)
        );

        const reserve1 = Number(
          ethers.formatUnits(reserves[1], 18)
        );

        const bnbPriceRes = await fetch(
          "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
        );

        const bnbData = await bnbPriceRes.json();

        const bnbUsd = Number(bnbData.price);

        const iramPriceInBnb =
          reserve1 / reserve0;

        const iramPriceUsd =
          iramPriceInBnb * bnbUsd;

        setIramPrice(
          `$${iramPriceUsd.toFixed(8)}`
        );

        const totalSupply = 1000000;

        const marketCapValue =
          iramPriceUsd * totalSupply;

        setMarketCap(
          `$${marketCapValue.toFixed(2)}`
        );

        setLiquidity("Rs18.94K");

      } catch (err) {

        console.log(err);

        setIramPrice("Price Unavailable");
      }
    };

    fetchPrice();

  }, []);

 return (

  <div className="marketPage">

    <div className="marketHeader">

      <span
        className="marketBackArrow"
        onClick={() => router.push("/daily-tasks")}
      >
        ←
      </span>

      <h2 className="marketTitle">
        Market
      </h2>

<div className="marketHeaderRight">

  <FiStar className="marketHeaderIcon" />

  <FiBell className="marketHeaderIcon" />


</div>

    </div>

    <div className="marketCard">
        <div className="marketCardTop">

  <img
    src="/images/iram-logo.png"
    alt="IRAM"
    className="marketTokenLogo"
  />

  

</div>
<div className="marketPairInfo">

    <div className="marketPairName">
      IRAM / BNB
      <span className="marketDropdown">⌄</span>
    </div>

    <div className="marketProjectName">
      IRAM Nexus
    </div>
<div className="marketTopRight">

  <div className="marketPrice">
    ${iramPrice}
  </div>

  <div className="marketUsdPrice">
    ≈ ${iramPrice}
  </div>

</div>

<div className="marketStatItem">

  <span className="marketStatLabel">
    24H High
  </span>

  <span className="marketStatValue">
    {high24h}
  </span>

</div>
<div className="market24hLow">

  <span className="market24hLowLabel">
    24H Low
  </span>

  <span className="market24hLowValue">
    {low24h}
  </span>

</div>
<div className="market24hVolume">

  <span className="market24hVolumeLabel">
    24H Volume
  </span>

  <span className="market24hVolumeValue">
    {volume24h}
  </span>

</div>
<div className="marketCapBox">

  <span className="marketCapLabel">
    Market Cap
  </span>

  <span className="marketCapValue">
    {marketCap}
  </span>

</div>
  <div className="marketChartCard">

  <iframe
  src="https://www.geckoterminal.com/bsc/pools/0x9cAE9A6D03D069A519485Bcc9c8fa9123f379EB0?embed=1&info=0&swaps=0&grayscale=0&light_chart=0"
  className="marketChartFrame"
/>
<button
  className="tradeIramBtn"
  onClick={() => router.push("/trade")}
>
  Trade IRAM
</button>
</div>


    </div>



</div>


</div>


    

  

);
}