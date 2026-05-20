"use client";

import "./pulse.css";

import {
  Home,
  Flame,
  Newspaper,
  BarChart3,
  Zap,
  Briefcase,
  Star,
  User,
  Bell,
  Settings,
  Search,
  Plus,
} from "lucide-react";

export default function PulsePage() {
  return (
    <div className="pulse-page">

      {/* LEFT SIDEBAR */}

      <aside className="sidebar">

        <div className="logo-box">

          <Zap className="logo-icon" />

          <h1>IRAM Pulse</h1>

        </div>

        <div className="menu">

          <div className="menu-item active">
            <Home size={20} />
            <span>Home</span>
          </div>

          <div className="menu-item">
            <Flame size={20} />
            <span>Trending</span>
          </div>

          <div className="menu-item">
            <Newspaper size={20} />
            <span>News</span>
          </div>

          <div className="menu-item">
            <BarChart3 size={20} />
            <span>Markets</span>
          </div>

          <div className="menu-item">
            <Zap size={20} />
            <span>Pulse</span>

            <div className="new-tag">
              NEW
            </div>
          </div>

          <div className="menu-item">
            <Briefcase size={20} />
            <span>Portfolio</span>
          </div>

          <div className="menu-item">
            <Star size={20} />
            <span>Watchlist</span>
          </div>

          <div className="menu-item">
            <User size={20} />
            <span>Profile</span>
          </div>

          <div className="menu-item">
            <Bell size={20} />
            <span>Notifications</span>
          </div>

          <div className="menu-item">
            <Settings size={20} />
            <span>Settings</span>
          </div>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="main-content">

        {/* TOPBAR */}

        <div className="topbar">

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search coins, topics, people..."
            />

          </div>

          <div className="top-actions">

            <button className="trend-btn">
              🔥 Trending
            </button>

            <button className="create-btn">
              <Plus size={18} />
              Create Post
            </button>

          </div>

        </div>

        {/* TRENDING */}

        <div className="trending-box">

          <div className="section-head">

            <h2>Trending Topics</h2>

            <span>View all</span>

          </div>

          <div className="tags">

            <div>#IRAMCoin</div>
            <div>#BTC</div>
            <div>#ETH</div>
            <div>#BullRun</div>
            <div>#Altseason</div>

          </div>

        </div>

        {/* CREATE POST */}

        <div className="create-post">

          <div className="post-top">

            <div className="avatar"></div>

            <input
              type="text"
              placeholder="What's on your mind?"
            />

            <button>
              Post
            </button>

          </div>

        </div>

        {/* POST */}

        <div className="feed-post">

          <div className="post-header">

            <div className="post-avatar"></div>

            <div>
              <h3>CryptoHunter</h3>
              <p>@cryptohunter • 2h</p>
            </div>

          </div>

          <div className="post-content">

            Bitcoin showing strong breakout 🚀
            <br />
            BTC holding above $66K looks bullish.

          </div>

          <div className="post-image"></div>

        </div>

      </main>

      {/* RIGHT SIDE */}

      <aside className="rightbar">

        <div className="right-card">

          <div className="section-head">

            <h2>Trending Coins</h2>

            <span>View all</span>

          </div>

          <div className="coin-item">
            <span>BTC</span>
            <strong>+2.45%</strong>
          </div>

          <div className="coin-item">
            <span>ETH</span>
            <strong>+1.32%</strong>
          </div>

          <div className="coin-item">
            <span>BNB</span>
            <strong>+0.98%</strong>
          </div>

        </div>

      </aside>

    </div>
  );
}