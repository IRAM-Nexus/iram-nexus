"use client";

import "./task-guide.css";
import {
  Layers3,

  Diamond,

} from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { Star } from "lucide-react";
import { Gift } from "lucide-react";
import { Ban } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Headset } from "lucide-react";



import { MoveUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { FilePenLine } from "lucide-react";
import { TableProperties } from "lucide-react";
import { ArrowRight } from "lucide-react";
import {
  UserRound,
  ClipboardList,
  Activity,
  X,
  CandlestickChart
} from "lucide-react";
import {
  FileText,
  
} from "lucide-react";

export default function TaskGuide() {

  const router = useRouter();

 return (
  <div className="taskGuidePage">

    <div className="taskGuideHeader">

      <button
        className="taskGuideBackBtn"
        onClick={() => router.push("/daily-tasks")}
      >
        ←
      </button>

      <h1 className="taskGuideTitle">
        Task Guide
      </h1>

    </div>

    <div className="guideIntroCard">

      <div className="guideIntroIconWrap">

        <FilePenLine
          className="guideIntroIcon"
          size={32}
        />

      </div>

      <div className="guideIntroContent">

        <p className="guideIntroText">
          This guide explains everything related to Daily Tasks,
          points, rewards, rules, policies and terms. Please
          read all the details carefully before participating.
        </p>

      </div>

      <button className="pointsTableBtn">

        <TableProperties
          className="pointsTableIcon"
          size={16}
        />

        <span>
          VIEW POINTS TABLE
        </span>

        <ArrowRight
          className="pointsArrow"
          size={16}
        />

      </button>

    </div>
<div className="eligibilityOverviewCard">

  {/* LEFT SIDE */}

  <div className="eligibilityBox">

    <div className="sectionTitleRow">

      <UserRound className="sectionIcon" />

      <span className="sectionTitle">
        1. ELIGIBILITY
      </span>

    </div>

    <ul className="eligibilityList">

      <li>Minimum $10 worth of IRAM must be held in your wallet.</li>

      <li>Wallet must be connected at all times.</li>

      <li>If your IRAM balance falls below $10, Daily Tasks may become locked until eligibility is restored.</li>

      <li>Only one account per user is allowed. Multiple accounts are strictly prohibited.</li>

      <li>Suspended or restricted accounts are not eligible.</li>

      <li>You must comply with all platform rules and policies.</li>

    </ul>

  </div>

  {/* DIVIDER */}

  <div className="verticalDivider"></div>

  {/* RIGHT SIDE */}

  <div className="overviewBox">

    <div className="sectionTitleRow">

      <ClipboardList className="sectionIcon" />

      <span className="sectionTitle">
        2. DAILY TASKS OVERVIEW
      </span>

    </div>

    <p className="overviewText">
      You can earn points by completing the following tasks daily.
    </p>

    <div className="taskRow">
      <Activity className="taskIcon" />
      <span className="taskName">IRAM Pulse Post</span>
      <span className="taskLimit">Max 3 Posts / Day</span>
    </div>

    <div className="taskRow">
      <div className="binanceCircle">◆</div>
      <span className="taskName">Binance Square Post</span>
      <span className="taskLimit">Max 3 Posts / Day</span>
    </div>

    <div className="taskRow">
      <X className="taskIcon" />
      <span className="taskName">X (Twitter) Post</span>
      <span className="taskLimit">Max 3 Posts / Day</span>
    </div>

    <div className="taskRow">
      <CandlestickChart className="taskIcon" />
      <span className="taskName">Internal Trade</span>
      <span className="taskLimit">Unlimited Trades</span>
    </div>

  </div>

</div>
<div className="taskRulesMainCard">

  <div className="taskRulesHeader">
    <FileText className="taskRulesHeaderIcon" />
    <span className="taskRulesHeaderText">
      3. TASK DETAILS & RULES
    </span>
  </div>

  
    <div className="taskRuleSection">

  <div className="ruleTitleRow">

    <Activity className="ruleIcon" />

    <span className="ruleTitle">
      IRAM PULSE POST
    </span>

  </div>

  <ul className="ruleList">

    <li>Maximum 3 posts per day.</li>

    <li>Minimum 200 characters per post.</li>

    <li>Content must be related to IRAM Nexus.</li>

    <li>Original content only.</li>

    <li>
      Copy-paste or duplicate content is not allowed.
    </li>

    <li>
      Deleted posts may result in point removal.
    </li>

  </ul>

</div>
<div className="taskRuleSection">

  <div className="ruleTitleRow">

    <div className="binanceIconCircle">
      <div className="binanceLogo">◆</div>
    </div>

    <span className="ruleTitle">
      BINANCE SQUARE POST
    </span>

  </div>

  <ul className="ruleList">

    <li>Maximum 3 posts per day.</li>

    <li>
      Minimum 200 characters per post.
    </li>

    <li>
      Content must be related to IRAM Nexus.
    </li>

    <li>
      Original content only.
    </li>

    <li>
      Copy-paste or duplicate content is not allowed.
    </li>

    <li>
      Deleted posts may result in point removal.
    </li>

  </ul>

</div>

<div className="taskRuleSection">

  <div className="ruleTitleRow">

    <X className="xRuleIcon" />

    <span className="ruleTitle">
      X (TWITTER) POST
    </span>

  </div>

  <ul className="ruleList">

    <li>Maximum 3 posts per day.</li>

    <li>Minimum 200 characters per post.</li>

    <li>Posts must be publicly visible.</li>

    <li>Content must be related to IRAM Nexus.</li>

    <li>Original content only.</li>

    <li>Deleted posts may result in point removal.</li>

  </ul>

</div>

<div className="taskRuleSection">

  <div className="ruleTitleRow">

    <MoveUpRight className="internalTradeIcon" />

    <span className="ruleTitle">
      INTERNAL TRADE
    </span>

  </div>

  <ul className="ruleList">

    <li>Unlimited trades allowed.</li>

    <li>Only completed trades count.</li>

    <li>Minimum trade amount may apply.</li>

    <li>Cancelled or failed trades are not eligible.</li>

    <li>
      Trading with the purpose of point farming is prohibited.
    </li>

  </ul>

</div>

</div>

<div className="segmentSystemCard">

  <div className="segmentSystemHeader">

    <Layers3 className="segmentSystemHeaderIcon" />

    <span className="segmentSystemHeaderText">
      4. SEGMENT SYSTEM
    </span>

  </div>

  <ul className="segmentSystemTopRules">
    <li>Tasks are divided into multiple segments.</li>
    <li>Each segment contains the following tasks:</li>
  </ul>

  <div className="segmentFlowCard">

    <div className="segmentTask">

      <div className="segmentTaskIconCircle">
        <Activity className="segmentTaskIcon" />
      </div>

      <span className="segmentTaskText">
        IRAM Pulse
      </span>

      <span className="segmentTaskText">
        Post
      </span>

    </div>

    <span className="segmentPlus">+</span>

    <div className="segmentTask">

      <div className="segmentTaskIconCircle">
        <Diamond className="segmentTaskIcon" />
      </div>

      <span className="segmentTaskText">
        Binance Square
      </span>

      <span className="segmentTaskText">
        Post
      </span>

    </div>

    <span className="segmentPlus">+</span>

    <div className="segmentTask">

      <div className="segmentTaskIconCircle">
        <X className="segmentTaskIcon" />
      </div>

      <span className="segmentTaskText">
        X (Twitter)
      </span>

      <span className="segmentTaskText">
        Post
      </span>

    </div>

    <span className="segmentPlus">+</span>

    <div className="segmentTask">

      <div className="segmentTaskIconCircle">
        <MoveUpRight className="segmentTaskIcon" />
      </div>

      <span className="segmentTaskText">
        Internal
      </span>

      <span className="segmentTaskText">
        Trade
      </span>

    </div>

  </div>

  <ul className="segmentSystemBottomRules">

    <li>
      All tasks inside the current segment must be completed.
    </li>

    <li>
      Once all tasks are completed, the next segment will be unlocked automatically.
    </li>

    <li>
      Incomplete segments will not be counted.
    </li>

    <li>
      You must complete tasks in sequence.
    </li>

  </ul>

</div>    
<div className="pointsSystemCard">

  <div className="pointsSystemHeader">

    <Star className="pointsSystemHeaderIcon" />

    <span className="pointsSystemHeaderText">
      5. POINTS SYSTEM
    </span>

  </div>

  <ul className="pointsSystemRules">

    <li>Points are awarded for each verified activity.</li>

    <li>Points may take time to reflect in your account.</li>

    <li>All points are subject to verification.</li>

    <li>
      Unverified, rejected or removed tasks will not be counted.
    </li>

  </ul>

  <div className="pointsTable">

    <div className="pointsTableHeader">

      <div className="activityColumn">
        Activity
      </div>

      <div className="pointsColumn">
        Points
      </div>

    </div>

    <div className="pointsTableRow">

      <div className="activityColumn">

        <Activity className="tableRowIcon" />

        <span>Verified IRAM Pulse Post</span>

      </div>

      <div className="pointsColumn">
        +1 Point
      </div>

    </div>

    <div className="pointsTableRow">

      <div className="activityColumn">

        <Diamond className="tableRowIcon" />

        <span>Verified Binance Square Post</span>

      </div>

      <div className="pointsColumn">
        +1 Point
      </div>

    </div>

    <div className="pointsTableRow">

      <div className="activityColumn">

        <X className="tableRowIcon" />

        <span>Verified X (Twitter) Post</span>

      </div>

      <div className="pointsColumn">
        +1 Point
      </div>

    </div>

    <div className="pointsTableRow">

      <div className="activityColumn">

        <MoveUpRight className="tableRowIcon" />

        <span>Verified Internal Trade</span>

      </div>

      <div className="pointsColumn">
        +1 Point
      </div>

    </div>

  </div>

</div>

<div className="rewardCalculationCard">

  <div className="rewardCalculationHeader">

    <Gift className="rewardCalculationIcon" />

    <span className="rewardCalculationTitle">
      6. REWARD CALCULATION
    </span>

  </div>

  <ul className="rewardCalculationList">

    <li>
      Rewards are calculated based on your final verified point score using the active digits system.
    </li>

    <li>
      Different point ranges unlock different reward digits.
    </li>

    <li>
      The higher your points, the more reward digits become active.
    </li>

    <li>
      To see the complete points range, active digits and reward details, click on the "VIEW POINTS TABLE" button at the top.
    </li>

    <li>
      Only verified points are counted in reward calculation.
    </li>

  </ul>

</div>


<div className="rewardDistributionCard">

  <div className="rewardDistributionHeader">

    <BadgeDollarSign className="rewardDistributionIcon" />

    <span className="rewardDistributionTitle">
      7. REWARD DISTRIBUTION
    </span>

  </div>

  <ul className="rewardDistributionList">

    <li>
      Rewards are calculated at the end of the reward cycle.
    </li>

    <li>
      Only verified and eligible points are included.
    </li>

    <li>
      Rewards are distributed according to the official schedule.
    </li>

    <li>
      Reward amounts may vary depending on point score and reward rules.
    </li>

    <li>
      IRAM Nexus reserves the right to adjust or cancel rewards in case of suspicious activity.
    </li>

  </ul>

</div>

<div className="prohibitedActivitiesCard">

  <div className="prohibitedActivitiesHeader">

    <Ban className="prohibitedActivitiesIcon" />

    <span className="prohibitedActivitiesTitle">
      8. PROHIBITED ACTIVITIES
    </span>

  </div>

  <div className="prohibitedActivitiesList">

    <div className="prohibitedItem">
      <X className="prohibitedX" />
      <span>Spam posting</span>
    </div>

    <div className="prohibitedItem">
      <X className="prohibitedX" />
      <span>Duplicate or copied content</span>
    </div>

    <div className="prohibitedItem">
      <X className="prohibitedX" />
      <span>Fake engagement</span>
    </div>

    <div className="prohibitedItem">
      <X className="prohibitedX" />
      <span>Artificial trading</span>
    </div>

    <div className="prohibitedItem">
      <X className="prohibitedX" />
      <span>Multiple accounts</span>
    </div>

    <div className="prohibitedItem">
      <X className="prohibitedX" />
      <span>Automated posting tools</span>
    </div>

    <div className="prohibitedItem">
      <X className="prohibitedX" />
      <span>Any activity that violates platform integrity</span>
    </div>

  </div>

</div>


<div className="penaltiesCard">

  <div className="penaltiesHeader">

    <TriangleAlert className="penaltiesIcon" />

    <span className="penaltiesTitle">
      9. PENALTIES
    </span>

  </div>

  <p className="penaltiesSubText">
    Violations may result in:
  </p>

  <div className="penaltiesList">

    <div className="penaltyItem">
      <ChevronRight className="penaltyArrow" />
      <span>Point removal</span>
    </div>

    <div className="penaltyItem">
      <ChevronRight className="penaltyArrow" />
      <span>Task rejection</span>
    </div>

    <div className="penaltyItem">
      <ChevronRight className="penaltyArrow" />
      <span>Reward disqualification</span>
    </div>

    <div className="penaltyItem">
      <ChevronRight className="penaltyArrow" />
      <span>Temporary suspension</span>
    </div>

    <div className="penaltyItem">
      <ChevronRight className="penaltyArrow" />
      <span>Permanent ban</span>
    </div>

  </div>

</div>

<div className="verificationPolicyCard">

  <div className="verificationPolicyHeader">

    <ShieldCheck className="verificationPolicyIcon" />

    <span className="verificationPolicyTitle">
      10. VERIFICATION POLICY
    </span>

  </div>

  <ul className="verificationPolicyList">

    <li>
      All tasks are subject to manual or automated review.
    </li>

    <li>
      Submitted content must remain public and accessible.
    </li>

    <li>
      Deleted or hidden content may result in point removal.
    </li>

    <li>
      Trading activity is verified for genuineness.
    </li>

    <li>
      IRAM Nexus reserves the right to request additional proof if needed.
    </li>

  </ul>

</div>


<div className="termsConditionsCard">

  <div className="termsConditionsHeader">

    <FilePenLine className="termsConditionsIcon" />

    <span className="termsConditionsTitle">
      11. TERMS & CONDITIONS
    </span>

  </div>

  <ul className="termsConditionsList">

    <li>
      IRAM Nexus reserves the right to modify, update or change any rule, policy, task requirement, point system or reward structure at any time without prior notice.
    </li>

    <li>
      Participation in Daily Tasks is completely voluntary.
    </li>

    <li>
      Users are responsible for their account security, wallet safety and compliance with platform rules.
    </li>

    <li>
      Any form of abuse, exploit or rule violation may result in immediate action.
    </li>

    <li>
      IRAM Nexus is not responsible for any loss, delay or issue caused by network, third-party platforms or user actions.
    </li>

    <li>
      By participating in Daily Tasks, you agree to all the above terms, conditions, policies and decisions made by IRAM Nexus.
    </li>

  </ul>

</div>

<div className="supportCard">

  <div className="supportLeft">

    <Headset className="supportIcon" />

    <p className="supportText">
      For any questions or issues related to Daily Tasks,
      points, verification or rewards, please contact
      IRAM Nexus Support.
    </p>

  </div>

  <button className="contactSupportBtn">

    <span>
      Contact Support
    </span>

    <ArrowRight className="contactSupportArrow" />

  </button>

</div>
  </div>


);
}