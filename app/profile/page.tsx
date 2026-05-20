"use client";

import "./profile.css";

import { useRouter } from "next/navigation";

import {
  UserPlus,
  Copy,
  Calendar,
  BadgeCheck,
  Users,
  Share2,
  Gift,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

export default function ProfilePage() { const router = useRouter();
  return (
    <div className="profile-page">

      {/* TOP BAR */}
      <div className="top-header">
        <div>
          <h1 className="profile-title">
            Profile</h1>
          <div className="title-line"></div>
        </div>

        <button
  className="back-btn"
  onClick={() => router.push("/dashboard")}
>
          <ArrowLeft size={22} />
          Back
        </button>
      </div>

      {/* PROFILE CARD */}

      <div className="profile-card glow-box">

        <div className="profile-left">

          <div className="avatar-ring">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop"
              alt="profile"
              className="avatar"
            />
          </div>

          <div className="profile-info">

            <div className="name-row">
              <h2>IRAM_Hunter</h2>
              <BadgeCheck className="verify-icon" size={28} />
            </div>

            <div className="wallet-row">
              <span>0xA7b3...F4d8E</span>
              <Copy size={18} />
            </div>

            <div className="joined-row">
              <Calendar size={18} />
              <span>Joined May 2025</span>
            </div>

            <button className="edit-btn">
              Edit Profile
            </button>

          </div>
        </div>

        <div className="profile-stats">

          <div className="stat-box">
            <Users size={36} />
            <h3>256</h3>
            <p>Followers</p>
          </div>

          <div className="stat-box">
            <Users size={36} />
            <h3>87</h3>
            <p>Following</p>
          </div>

          <button className="follow-btn">
            <UserPlus size={24} />
            Follow
          </button>

        </div>
      </div>


      {/* MIDDLE GRID */}

      <div className="middle-grid">

        {/* INVITE */}

        <div className="small-card glow-box invite-card">

          <div className="card-head">
            <div className="icon-circle">
              <Users size={28} />
            </div>

            <h3>Invite Friends</h3>
          </div>

          <p>
            Invite your friends and earn IRAM rewards together.
          </p>

          <button className="gold-btn">
            <UserPlus size={22} />
            Invite Now
          </button>

        </div>


        {/* REFERRAL */}

        <div className="small-card glow-box">

          <div className="card-head">
            <div className="icon-circle">
              <Share2 size={28} />
            </div>

            <h3>Referral Code</h3>
          </div>

          <div className="referral-box">
            <span>ABC123</span>
            <Copy size={22} />
          </div>

          <p>
            Share your code and earn rewards.
          </p>

        </div>


        {/* SOCIAL LINKS */}

        <div className="small-card glow-box">

          <div className="card-head">
            <div className="icon-circle">
              <Share2 size={28} />
            </div>

            <h3>Social Links</h3>
          </div>


          <div className="social-link">
            <span>@IRAM_Hunter</span>
            <ExternalLink size={20} />
          </div>

          <div className="social-link">
            <span>t.me/IRAM_Hunter</span>
            <ExternalLink size={20} />
          </div>

        </div>

      </div>


      {/* RECENT ACTIVITY */}

      <div className="activity-card glow-box">

        <div className="activity-top">
          <h2>Recent Activity</h2>
          <span>View All</span>
        </div>


        <div className="activity-item">

          <div className="activity-icon">
            <UserPlus size={24} />
          </div>

          <div className="activity-content">
            <h4>Joined IRAM Nexus</h4>
            <p>Welcome to the community!</p>
          </div>

          <div className="activity-reward">+5 IRAM</div>

          <div className="activity-date">May 15, 2025</div>

        </div>


        <div className="activity-item">

          <div className="activity-icon">
            <Gift size={24} />
          </div>

          <div className="activity-content">
            <h4>Referred a Friend</h4>
            <p>You earned rewards for inviting a friend.</p>
          </div>

          <div className="activity-reward">+20 IRAM</div>

          <div className="activity-date">May 16, 2025</div>

        </div>


        <div className="activity-item">

          <div className="activity-icon">
            <Share2 size={24} />
          </div>

          <div className="activity-content">
            <h4>Followed IRAM Nexus on X</h4>
            <p>Thanks for following us!</p>
          </div>

          <div className="activity-reward">+5 IRAM</div>

          <div className="activity-date">May 16, 2025</div>

        </div>

      </div>

    </div>
  );
}


  