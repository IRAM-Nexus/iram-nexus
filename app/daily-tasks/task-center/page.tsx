"use client";

import "./task-center.css";
import { useRouter } from "next/navigation";

export default function TaskCenter() {

  const router = useRouter();

  return (
   <div className="taskCenterHeader">

  <button
    className="taskCenterBackBtn"
    onClick={() => router.push("/daily-tasks")}
  >
    ←
  </button>

  <h1 className="taskCenterTitle">
    Tasks
  </h1>

  <button className="taskGuideBtn">
  <span>Task Guide</span>
  <span className="guideIcon">?</span>
</button>

</div>

    
  );
}