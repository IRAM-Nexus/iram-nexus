"use client";

import "./daily-tasks.css";
import { useRouter } from "next/navigation";
import { Lightbulb } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { House } from "lucide-react";
import { Activity } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { UserRound } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";





export default function DailyTasks() {
  const router = useRouter();

  return (
    <div className="dailyTasksPage">

      <div className="dailyHeader">
        <button
          className="backBtn"
          onClick={() => router.push("dashboard")}
        >
          ←
        </button>
      </div>

      <div className="headerTitle">
        Daily Tasks
      </div>

      <button
  className="taskGuideBtn"
  onClick={() =>
    router.push("/daily-tasks/task-guide")
  }
>
  <span>Task Guide</span>
  <span className="guideIcon">?</span>
</button>

      <div className="heroCard">
  <img
    src="/daily-banner.png"
    alt=""
    className="bannerImg"
  />
<h2 className="heroTitle">
  IRAM NEXUS
</h2>
<span className="logoI">I</span>

<span className="rightLogoI">I</span>

<div className="heroDesc">
  <p>Complete daily tasks, earn points</p>
  <p>and climb the leaderboard.</p>
</div>

</div>
<div className="dailyPanel">

    <div className="unlockCircle">
  <div className="lockShape">
    <div className="lockHandle"></div>
    <div className="lockBody">
      <div className="lockHole"></div>
    </div>
  </div>




</div>
<div className="unlockText">
    UNLOCK DAILY TASKS
  </div>

<div className="unlockDesc">
  <p>Trade minimum $10 IRAM</p>
  <p>to unlock Daily Tasks</p>
</div>
<button className="tradeIramBtn">
  <span>Trade IRAM</span>
  
</button>

<div className="unlockStatusCard">

    <h3 className="unlockStatusTitle">
  Unlock Status
</h3>

<div className="lockedBadge">
  <span className="lockedText">🔒 LOCKED</span>
</div>

<div className="unlockProgress">
  <span className="currentAmount">0</span>
  <span className="slash"> / </span>
  <span className="targetAmount">$10</span>
</div>
<p className="unlockNote">
  Bought minimum $10 IRAM
</p>
</div>



</div>

<div className="rewardFlowCard">
  <img
    src="/images/task-flow.png"
    alt=""
    className="flowImage"
  />
<div className="buyStepText">
  <span className="buyStepTitle">BUY IRAM</span>
  <span className="buyStepAmount">$10</span>
</div>

<div className="completeStepText">
  <span className="completeTitle">COMPLETE</span>
  <span className="completeSubtitle">TASKS</span>
</div>

<div className="leaderboardStepText">
  <span className="leaderboardTitle">CLIMB</span>
  <span className="leaderboardSubtitle">LEADERBOARD</span>
</div>

<div className="rewardsStepText">
  <span className="rewardsTitle">GET</span>
  <span className="rewardsSubtitle">REWARDS</span>
</div>

</div>

<div className="howWorksCard">

  <div className="ideaCircle">
  <Lightbulb className="ideaIcon" />
</div>

<h3 className="howWorksTitle">
  How it works?
</h3>  

<p className="howWorksLine1">
  Buy minimum $10 IRAM once. As long as you hold $10
</p>

<p className="howWorksLine2">
  or more IRAM in your wallet, Daily Tasks will remain active.
</p>

<div className="howWorksArrow">
  ▾
</div>

</div>

<div className="whyIramCard">
  <img
  src="/images/iram-coins.png"
  alt=""
  className="coinsImg"
/>

<h3 className="whyIramTitle">
  Why $10 IRAM?
</h3>

<p className="whyIramDesc1">
  This ensures real users participate and helps us build a strong,
</p>

<p className="whyIramDesc2">
  active and spam-free community.
</p>

<div className="secureBadge">

  <ShieldCheck className="secureIcon" />

  <span className="secureText">
    Secure & Transparent
  </span>

</div>



</div>

<div className="afterUnlockCard">

  <img
  src="/images/daily-cube.png"
  alt=""
  className="dailyCubeImg"
/>

<img
  src="/images/unlock-green.png"
  alt="Unlock"
  className="unlockGreenImg"
/>

<h3 className="afterUnlockTitle">
  After Unlocking
</h3>

<p className="afterUnlockSubTitle">
  You will get access to:
</p>

<div className="afterUnlockRowOne">

  <span className="afterUnlockCheckOne">
    ✓
  </span>

  <span className="afterUnlockLabelOne">
    3 Posts on X ( Twitter )
  </span>

</div>

<div className="afterUnlockRowTwo">

  <span className="afterUnlockCheckTwo">
    ✓
  </span>

  <span className="afterUnlockLabelTwo">
    3 Posts on IRAM Pulse
  </span>

</div>

<div className="afterUnlockRowThree">

  <span className="afterUnlockCheckThree">
    ✓
  </span>

  <span className="afterUnlockLabelThree">
    3 Posts on Binance Square
  </span>

</div>
<div className="afterUnlockRowFour">

  <span className="afterUnlockCheckFour">
    ✓
  </span>

  <span className="afterUnlockLabelFour">
    Unlimited Buy Trades (Min $10)
  </span>

</div>

</div>
<div className="nexusBottomBar">

  <div className="dailyNavHome">

  <House className="dailyNavHomeIcon" />

  <span className="dailyNavHomeText">
    Home
  </span>

</div>

<div className="dailyTaskPulseNav">

  <div className="dailyTaskPulseLogo">

    <svg
      className="dailyTaskPulseSvg"
      viewBox="0 0 140 70"
      fill="none"
    >

      <defs>

        <linearGradient
          id="goldGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#ffdf7a" />
          <stop offset="50%" stopColor="#ffb326" />
          <stop offset="100%" stopColor="#ff8c00" />
        </linearGradient>

      </defs>

      <path
        d="
        M5 38
        L20 38
        L32 38
        L45 14
        L58 60
        L74 4
        L88 52
        L100 38
        L118 38
        L135 38
        "
      />

    </svg>

  </div>

  <span className="dailyTaskPulseText">
    Pulse
  </span>
</div>
<div
  className="dailyTasksNavItem"
  onClick={() =>
    router.push("/daily-tasks/task-center")
  }
>

  <ClipboardList className="dailyTasksNavIcon" />

  <span className="dailyTasksNavText">
    Tasks
  </span>

</div>
<div className="dailyNavProfile">

  <UserRound className="dailyNavProfileIcon" />

  <span className="dailyNavProfileText">
    Profile
  </span>

</div>

<div
  className="dailyNavMarkets"
  onClick={() => router.push("/market")}
>

  <ChartColumnIncreasing className="dailyNavMarketsIcon" />

  <span className="dailyNavMarketsText">
    Markets
  </span>



</div>

</div>



    </div>
  );
}