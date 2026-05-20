"use client";

import "./notifications.css";

import {
  ArrowLeft,
  Bell,
  Gift,
  Users,
  Shield,
  Repeat,
  CheckCircle2,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function NotificationsPage() {

  const router = useRouter();

  const notifications = [
    {
      icon: <Gift size={28} />,
      title: "Congratulations! 🎉",
      text: "You have earned 50 IRAM for completing a task.",
      time: "2 min ago",
      active: true,
    },

    {
      icon: <Users size={28} />,
      title: "New Follower",
      text: "Ali Khan started following you.",
      time: "1 hour ago",
      active: true,
    },

    {
      icon: <Bell size={28} />,
      title: "Daily Bonus",
      text: "Your daily bonus of 20 IRAM is ready.",
      time: "3 hours ago",
      active: true,
    },

    {
      icon: <CheckCircle2 size={28} />,
      title: "Task Completed",
      text: "Twitter task completed successfully.",
      time: "Yesterday",
      active: false,
    },

    {
      icon: <Repeat size={28} />,
      title: "IRAM Transfer",
      text: "100 IRAM transferred successfully.",
      time: "May 26, 2025",
      active: false,
    },

    {
      icon: <Shield size={28} />,
      title: "Security Alert",
      text: "New login detected from Chrome.",
      time: "May 25, 2025",
      active: false,
    },
  ];

  return (

    <div className="notifications-page">

      {/* TOP BAR */}

      <div className="top-bar">

        <button
          className="back-btn"
          onClick={() => router.push("/dashboard")}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        

      </div>

      {/* HEADER */}

      <div className="heading-section">

        <div>

          <h1>Notifications</h1>

          <p>
            Stay updated with all latest activities and alerts.
          </p>

        </div>

        <button className="mark-btn">
          Mark all as read
        </button>

      </div>

      {/* FILTERS */}

      <div className="filter-bar">

        <button className="active-filter">
          All
        </button>

        <button>
          Unread
        </button>

        <button>
          Activities
        </button>

        <button>
          Rewards
        </button>

        <button>
          System
        </button>

      </div>

      {/* LIST */}

      <div className="notifications-list">

        {notifications.map((item, index) => (

          <div
            className="notification-card"
            key={index}
          >

            <div className="left-side">

              <div className="icon-box">
                {item.icon}
              </div>

              <div className="text-side">

                <h2>{item.title}</h2>

                <p>{item.text}</p>

              </div>

            </div>

            <div className="right-side">

              <span>{item.time}</span>

              <div
                className={
                  item.active
                    ? "dot active"
                    : "dot"
                }
              ></div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}