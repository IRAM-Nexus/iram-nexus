"use client";
import { useState, useEffect } from "react";
import Dashboard from "./dashboard/page";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDashboard(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 Intro Screen
  if (!showDashboard) {
  return (
    <div className="intro-wrapper">

      <div className="text-center">
        <h1 className="intro-title animate-zoomIn">
  IRAM Nexus
</h1>

<p className="intro-subtitle animate-zoomIn">
  Connect • Earn • Grow
</p>
      </div>

    </div>
  );
}
return <Dashboard />
}