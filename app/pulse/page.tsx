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
} from "lucide-react";

export default function PulsePage() {

  return (


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

</div>
        </div>

      

);
}

