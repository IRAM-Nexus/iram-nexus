"use client";

import "./pulse.css";

import {
  House,
  Flame,
 Newspaper,
  BarChart3,
  Activity,
  BriefcaseBusiness,
  Star,
  User,
  Bell,
  Plus,
  Settings,
  Home,
  
  Gift,

  

} from "lucide-react";

export default function PulsePage() {

  return (

<>
    <div className="desktop-layout">

      <div className="main-layout">
    

    <div className="pulse-page">

      {/* LOGO */}

      <div className="pulse-logo">

        <svg
          className="pulse-svg"
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

        <h1>IRAM Pulse</h1>

      </div>

      {/* MENU */}

      <div className="pulse-menu">

        <button className="menu-item active">

          <div className="menu-left">

            <House size={28} />

            <span className="menu-text">
              Home
            </span>

          </div>

        </button>

        <button className="menu-item">

          <div className="menu-left">

            <Flame size={28} />

            <span className="menu-text">
              Trending
            </span>

          </div>

        </button>

        <button className="menu-item">

          <div className="menu-left">

            <Newspaper size={28} />

            <span className="menu-text">
              News
            </span>

          </div>

        </button>

        <button className="menu-item">

          <div className="menu-left">

            <BarChart3 size={28} />

            <span className="menu-text">
              Markets
            </span>

          </div>

        </button>

        <button className="menu-item pulse-active">

          <div className="menu-left">

            <Activity
              size={28}
              className="pulse-gold-icon"
            />

            <span className="pulse-text">
              Pulse
            </span>

          </div>

          <div className="new-badge">
            NEW
          </div>

        </button>

        <div className="menu-divider"></div>

        <button className="menu-item">

          <div className="menu-left">

            <BriefcaseBusiness size={28} />

            <span className="menu-text">
              Portfolio
            </span>

          </div>

        </button>

        <button className="menu-item">

          <div className="menu-left">

            <Star size={28} />

            <span className="menu-text">
              Watchlist
            </span>

          </div>

        </button>

        <button className="menu-item">

          <div className="menu-left">

            <User size={28} />

            <span className="menu-text">
              Profile
            </span>

          </div>

        </button>

        <button className="menu-item notify-item">

          <div className="menu-left">

            <Bell size={28} />

            <span className="menu-text">
              Notifications
            </span>

          </div>

          <div className="notify-count">
            3
          </div>

        </button>

        <button className="menu-item">

          <div className="menu-left">

            <Settings size={28} />

            <span className="menu-text">
              Settings
            </span>

          </div>

        </button>
</div>


{/* BOTTOM CARD */}

<div className="pulse-bottom-card">

  <div className="pulse-score-top">

    <div className="score-icon">

      <svg
        className="small-pulse-svg"
        viewBox="0 0 140 70"
        fill="none"
      >

        <defs>

          <linearGradient
            id="smallGoldGradient"
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

    <div>

      <h2>8,950</h2>

      <div className="score-row">

        <span>Pulse Score</span>

        <p>↑ 12%</p>

      </div>

    </div>

  </div>

  <div className="pulse-stats">

    <div className="stat-row">

      <span>🔥 Daily Streak</span>

      <strong>7 Days</strong>

    </div>

    <div className="stat-row">

      <span>🪙 IRAM Earned Today</span>

      <strong className="green">
        + 25.6 IRAM
      </strong>

    </div>

    <div className="stat-row">

      <span>⭐ Creator Rank</span>

      <strong>Top 4%</strong>

    </div>

  </div>

  <button className="reward-btn">
    View Rewards
  </button>
  <div className="earth-glow"></div>

  <div className="earth-wrapper">

  <img
    src="/earth.png"
    alt="earth"
    className="earth-image"
  />

</div>
</div>


    </div>

    {/* RIGHT SIDE */}

    <div className="right-side">

      <div className="right-top-bar">

        

        <button className="top-notify-btn">

          <Bell size={22} />

        </button>

        <button className="create-post-btn">

          <span>＋</span>

          <span>Create Post</span>

        </button>

        <div className="top-profile">

          <img
            src="/profile.jpg"
            alt="profile"
          />

          <div className="online-dot"></div>

    </div>

  </div>
<div className="market-card">

  <div className="market-header">

    <h2>Market Overview</h2>

    <span>View all ›</span>

  </div>

  {/* BTC */}

  <div className="coin-row">

    <div className="coin-left">

      <img src="/btc.png" alt="btc" />

      <div>

        <h3>BTC</h3>

        <p>Bitcoin</p>

      </div>

    </div>

    <div className="coin-right">

      <h4>$66,245.80</h4>

      <span>+2.45%</span>

    </div>

  </div>

  {/* ETH */}

  <div className="coin-row">

    <div className="coin-left">

      <img src="/eth.png" alt="eth" />

      <div>

        <h3>ETH</h3>

        <p>Ethereum</p>

      </div>

    </div>

    <div className="coin-right">

      <h4>$3,142.32</h4>

      <span>+1.32%</span>

    </div>

  </div>

  {/* BNB */}

  <div className="coin-row">

    <div className="coin-left">

      <img src="/bnb.png" alt="bnb" />

      <div>

        <h3>BNB</h3>

        <p>BNB</p>

      </div>

    </div>

    <div className="coin-right">

      <h4>$571.45</h4>

      <span>+0.98%</span>

    </div>

  </div>

  {/* SOL */}

  <div className="coin-row">

    <div className="coin-left">

      <img src="/sol.png" alt="sol" />

      <div>

        <h3>SOL</h3>

        <p>Solana</p>

      </div>

    </div>

    <div className="coin-right">

      <h4>$152.79</h4>

      <span>+3.25%</span>

    </div>

  </div>

  {/* XRP */}

  <div className="coin-row">

    <div className="coin-left">

      <img src="/xrp.png" alt="xrp" />

      <div>

        <h3>XRP</h3>

        <p>XRP</p>

      </div>

    </div>

    <div className="coin-right">

      <h4>$0.52</h4>

      <span>+1.12%</span>

    </div>

  </div>

</div>

<div className="trending-card">

  <div className="trending-header">

    <h2>Trending Now</h2>

    <span>View all ›</span>

  </div>

  {/* ITEM 1 */}

  <div className="trend-row">

    <div className="trend-icon">🔥</div>

    <div className="trend-content">

      <h3>Bitcoin Breakout</h3>

      <p>12.5K posts</p>

    </div>

  </div>

  {/* ITEM 2 */}

  <div className="trend-row">

    <div className="trend-icon">🚀</div>

    <div className="trend-content">

      <h3>Altcoin Season</h3>

      <p>8.2K posts</p>

    </div>

  </div>

  {/* ITEM 3 */}

  <div className="trend-row">

    <div className="trend-icon">📈</div>

    <div className="trend-content">

      <h3>ETF News</h3>

      <p>6.7K posts</p>

    </div>

  </div>

  {/* ITEM 4 */}

  <div className="trend-row">

    <div className="trend-icon">💎</div>

    <div className="trend-content">

      <h3>Memecoin Hype</h3>

      <p>4.3K posts</p>

    </div>

  </div>

  {/* ITEM 5 */}

  <div className="trend-row">

    <div className="trend-icon">🌍</div>

    <div className="trend-content">

      <h3>Web3 Updates</h3>

      <p>3.1K posts</p>

    </div>

  </div>

</div>
<div className="creator-card">

  <div className="creator-header">

    <h2>Top Creators</h2>

    <span>View all ›</span>

  </div>

  {/* CREATOR 1 */}

  <div className="creator-row">

    <div className="creator-left">

      <img
        src="/creator1.png"
        alt="creator"
      />

      <div>

        <h3>CryptoHunter</h3>

        <p>@cryptohunter</p>

      </div>

    </div>

    <button className="follow-btn">
      Follow
    </button>

  </div>

  {/* CREATOR 2 */}

  <div className="creator-row">

    <div className="creator-left">

      <img
        src="/creator2.png"
        alt="creator"
      />

      <div>

        <h3>AltcoinGems</h3>

        <p>@altcoingems</p>

      </div>

    </div>

    <button className="follow-btn">
      Follow
    </button>

  </div>

  {/* CREATOR 3 */}

  <div className="creator-row">

    <div className="creator-left">

      <img
        src="/creator3.png"
        alt="creator"
      />

      <div>

        <h3>DeFi Expert</h3>

        <p>@defiexpert</p>

      </div>

    </div>

    <button className="follow-btn">
      Follow
    </button>

  </div>

</div>

{/* SEARCH BAR */}

<div className="top-search-wrap">

  <div className="search-bar">

    <span className="search-icon">
      🔍
    </span>

    <input
      type="text"
      placeholder="Search coins, topics, people..."
    />

  </div>

  <button className="trending-btn">

    🔥 Trending

  </button>

</div>

{/* CREATE POST CARD */}

<div className="create-post-card">

  {/* TOP */}

  <div className="create-top">

    <img
      src="/creator1.png"
      alt="profile"
      className="create-avatar"
    />

    <input
      type="text"
      placeholder="What's on your mind?"
      className="create-input"
    />

  </div>

  {/* BOTTOM */}

  <div className="create-bottom">

    <div className="create-actions">

      <button>🖼️</button>

      <button>📊</button>

      <button>GIF</button>

      <button>📈</button>

      <button>😊</button>

      <button>#</button>

    </div>

    <button className="post-btn">
      Post
    </button>

  </div>

</div>
{/* TRENDING TOPICS */}

<div className="topics-card">

  <div className="topics-header">

    <h2>Trending Topics</h2>

    <span>View all ›</span>

  </div>

  <div className="topics-wrap">

    <div className="topic-pill">
      🔥 #IRAMCoin
    </div>

    <div className="topic-pill">
      🪙 #BTC
    </div>

    <div className="topic-pill">
      💠 #ETH
    </div>

    <div className="topic-pill">
      📈 #BullRun
    </div>

    <div className="topic-pill">
      🚀 #Altseason
    </div>

  </div>

</div>


{/* EMPTY FEED CARD */}

<div className="empty-feed-card">

  {/* ICON */}

  <div className="empty-icon-wrap">

    <div className="empty-glow"></div>

    <div className="empty-pulse-icon">

      <svg
        className="feed-pulse-svg"
        viewBox="0 0 140 70"
        fill="none"
      >

        <defs>

          <linearGradient
            id="feedGoldGradient"
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

  </div>

  {/* TEXT */}

  <h2>Your Pulse Feed is empty</h2>

  <p>
    Follow creators, explore trending topics
    and start engaging with the community.
  </p>

  {/* BUTTON */}

  <button className="explore-btn">

    Explore Trending

  </button>

</div>




{/* EMPTY EVENTS CARD */}

<div className="events-card">

</div>


<div className="events-card">

  {/* EMPTY INNER CARD */}

  <div className="event-inner-card">

    <img
  src="/event1.png"
  alt="event"
  className="event-image"
/>

<button className="join-btn">
  Join Now →
</button>



  </div>

{/* EXPLORE CARD */}

<div className="explore-card">

  <img
  src="/event2.png"
  alt="campaign"
  className="explore-image"
/>

<button className="explore-join-btn">
  Join Now →
</button>



</div>

{/* REFER NOW CARD */}

<div className="refer-now-card">

  <img
  src="/event3.png"
  alt="refer"
  className="refer-image"
/>

<button className="refer-btn">
  Join Now →
</button>

</div>

</div>

</div>

</div>

{/* MOBILE HOME */}

</div>

<div className="mobile-home">

<div className="mobile-topbar">

  <div className="mobile-logo-side">

    
  <div className="mobile-logo-wrap">

  {/* TEXT FIRST */}

  <h1>
    <span>IRAM</span>
    <strong>PULSE</strong>
  </h1>



  {/* LOGO AFTER TEXT */}

  <svg
    className="mobile-pulse-logo"
    viewBox="0 0 140 70"
    fill="none"
  >

    <defs>

      <linearGradient
        id="mobileGold"
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
      stroke="url(#mobileGold)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

  </svg>

  

</div>
<p className="mobile-subtext">
  The Web3 Social Hub of IRAM Nexus
</p>
  </div>

<div className="mobile-top-right">

    <div className="mobile-bell">

      <Bell size={28} strokeWidth={2.2}/>

      <span className="mobile-badge">
        3
      </span>

    
      </div>
      </div>




</div>

{/* SEARCH BAR */}

<div className="mobile-search-wrap">

  <div className="mobile-search-bar">

    <span className="mobile-search-icon">
      🔍
    </span>

    <input
      type="text"
      placeholder="Search coins, topics, people..."
    />

    <button className="mobile-filter-btn">
      ☰
    </button>

  </div>

</div>

{/* CATEGORY TABS */}

<div className="mobile-tabs">

  <button className="mobile-tab active">
    For You
  </button>

  <button className="mobile-tab active">
    Trending
  </button>

  <button className="mobile-tab active">
    Following
  </button>

  <button className="mobile-tab active">
    IRAM
  </button>

  <button className="mobile-tab alpha active alpha-tab">

    Alpha

    

  </button>

  <button className="mobile-tab active">
    News
  </button>

</div>

{/* CREATE POST CARD */}

<div className="mobile-create-card">

  {/* TOP AREA */}

  <div className="mobile-create-top">

    {/* PROFILE */}

    <img
      src="/profile.jpg"
      alt="profile"
      className="mobile-create-avatar"
    />

    {/* INPUT */}

    <input
      type="text"
      placeholder="What’s on your mind?"
      className="mobile-create-input"
    />

  </div>

  {/* BOTTOM AREA */}

  <div className="mobile-create-bottom">

    {/* LEFT ACTIONS */}

    <div className="mobile-create-actions">

      {/* IMAGE */}

      <button className="mobile-action-btn">

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 5H20V19H4V5Z"
            stroke="white"
            strokeWidth="2"
            rx="2"
          />
          <circle
            cx="9"
            cy="10"
            r="2"
            fill="white"
          />
          <path
            d="M20 16L15 11L6 18"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        <span>Image</span>

      </button>

      {/* CHART */}

      <button className="mobile-action-btn">

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 19V10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 19V5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M19 19V13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <span>Chart</span>

      </button>

      {/* POLL */}

      <button className="mobile-action-btn">

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="4"
            y="5"
            width="6"
            height="14"
            stroke="white"
            strokeWidth="2"
          />

          <rect
            x="14"
            y="10"
            width="6"
            height="9"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        <span>Poll</span>

      </button>

      {/* AI */}

      <button className="mobile-action-btn ai-btn">

        <span className="ai-icon">
          ✦
        </span>

        <span>AI Write</span>

      </button>

    </div>

    {/* POST BUTTON */}

    <button className="mobile-post-btn">
      Post
    </button>

  </div>

</div>

<div className="think-big-banner">

  <h2>Think Big Build Big</h2>

</div>

<div className="mobile-empty-feed-card">

  <img
    src="/pulse-empty.png"
    alt="pulse"
    className="mobile-empty-image"
  />

  <h2 className="mobile-empty-title">
    Your Pulse Feed is empty
  </h2>

  <p className="mobile-empty-text">
    Follow creators, explore trending topics
    and start engaging with the community.
  </p>

  <button className="mobile-explore-btn">
    Explore Trending
  </button>

</div>
<div className="mobile-bottom-nav">

  <div className="nav-item">
    <Home size={14} />
    <p>Home</p>
  </div>

  <div className="nav-item">
    <Flame size={14} />
    <p>Trending</p>
  </div>

  <div className="nav-center">

    <div className="pulse-circle">

      <svg
        className="bottom-pulse-logo"
        viewBox="0 0 140 70"
        fill="none"
      >
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
          stroke="#ffb326"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    </div>

  </div>

  <div className="nav-item">
    <Gift size={14} />
    <p>Rewards</p>
  </div>

  <div className="nav-item">
    <User size={14} />
    <p>Profile</p>
  </div>

</div>
  
</div>

</>
);
}