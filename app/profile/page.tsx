

"use client";

import "./profile.css";


import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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
  MessageCircle,
  Send,
  Bird,
  BadgeInfo,
} from "lucide-react";
import { useAccount } from "wagmi";

export default function ProfilePage() { const {
  address,
  isConnected,
} = useAccount();
   const router = useRouter();

   const [showVerifyPopup, setShowVerifyPopup] = useState(false);




  const followers = 0;
const loginDays = 0;
const monthlyViews = 0;

const [profileFollowers,
  setProfileFollowers] =
  useState(0);

const [following,
  setFollowing] =
  useState(0);
  const [name, setName] = useState("");

  const [twitter, setTwitter] =
  useState("");

const [telegram, setTelegram] =
  useState("");

const [image, setImage] = useState(
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop"
);

const [editOpen, setEditOpen] = useState(false);
const [loading, setLoading] = useState(true);
const [copied, setCopied] =
  useState(false);

const [linkCopied, setLinkCopied] =
  useState(false);

const [shareOpen, setShareOpen] =
  useState(false);

const [mounted, setMounted] =
  useState(false);
const [bio, setBio] = useState(
  "Web3 enthusiast • Early believer in decentralized future. Exploring, building and growing in the IRAM ecosystem."
);

const [web3Explorer, setWeb3Explorer] =
useState(false);

const [showWeb3Popup,
  setShowWeb3Popup] =
  useState(false);

  const [earlySupporter,
  setEarlySupporter] =
  useState(false);

const [showEarlyPopup,
  setShowEarlyPopup] =
  useState(false);
  

  const joinedEarly = false;

const active18Days = false;

const holds30IRAM = false;

const [iramCommunity,
  setIramCommunity] =
  useState(false);

const [showCommunityPopup,
  setShowCommunityPopup] =
  useState(false);

  const dailyPosts = 0;

const streakDays = 0;

const inactiveDays = 0;



const [bioOpen, setBioOpen] =
useState(false);

  const [joinDate, setJoinDate] =
  useState("");

  const [activities, setActivities] =
useState<any[]>([]);

  const [referralCode, setReferralCode] =
  useState("");

  const [isFollowing,
  setIsFollowing] =
  useState(false);


  const [activityOpen, setActivityOpen] =
useState(false);

const [selectedActivity,
  setSelectedActivity] =
  useState<any>(null);

  const [readActivities,
  setReadActivities] =
  useState<number[]>(() => {

    if (typeof window !== "undefined") {

      const saved =
        localStorage.getItem(
          "readActivities"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    }

    return [];
});

const [unreadCount, setUnreadCount] =
useState(0);

const [isMobile, setIsMobile] =
useState(false);

const [mountedView, setMountedView] =
useState(false);


const isOwnProfile = true;



useEffect(() => {


  setMountedView(true);

if (window.innerWidth <= 768) {

  setIsMobile(true);

}

 

  setMounted(true);

  if (address) {

  const code =
    address.slice(2, 8).toUpperCase();

  setReferralCode(code);
}

 const savedFollow =
  localStorage.getItem(
    "isFollowing"
  );

if (savedFollow === "true") {

  setIsFollowing(true);

  setProfileFollowers(1);

}

  const savedJoinDate =
  localStorage.getItem("joinDate");

if (savedJoinDate) {

  setJoinDate(savedJoinDate);

} else {

  const today = new Date();

  const formattedDate =
    today.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

  localStorage.setItem(
    "joinDate",
    formattedDate
  );

  setJoinDate(formattedDate);
}

  const savedName = localStorage.getItem("profileName");

  const savedImage = localStorage.getItem("profileImage");


  const savedTwitter =
localStorage.getItem("twitter");

const savedTelegram =
localStorage.getItem("telegram");

const savedBio =
localStorage.getItem("profileBio");

if (savedBio) {

  setBio(savedBio);

}


const savedActivities =
localStorage.getItem("activities");

if (savedActivities) {

  setActivities(
    JSON.parse(savedActivities)
  );

} else {

  const defaultActivities = [

    {
      title: "Joined IRAM Nexus",
      reward: "+5 IRAM",
      date: "May 15, 2025",
    },

    {
      title: "Referred a Friend",
      reward: "+20 IRAM",
      date: "May 16, 2025",
    },

    {
      title: "Followed IRAM Nexus on X",
      reward: "+5 IRAM",
      date: "May 16, 2025",
    },

  ];

  setActivities(defaultActivities);

  localStorage.setItem(
    "activities",
    JSON.stringify(defaultActivities)
  );
}

  

  if (savedName) {
    setName(savedName);
  } else {
    setName("");
  }
setTwitter(
  savedTwitter || ""
);

setTelegram(
  savedTelegram || ""
);
  setImage(

  savedImage ||

  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop"
);

if (isConnected) {

  const alreadyJoined =
    localStorage.getItem(
      "joinedActivity"
    );

  if (!alreadyJoined) {

    const newActivity = {

      title: "Joined IRAM Nexus",

      reward: "+5 IRAM",

      date:
        new Date().toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
            year: "numeric",
          }
        ),
    };

    const updatedActivities = [
      newActivity,
      ...activities,
    ];

    setActivities(updatedActivities);

    localStorage.setItem(
      "activities",
      JSON.stringify(updatedActivities)
    );

    localStorage.setItem(
      "joinedActivity",
      "true"
    );
  }
}

const profileComplete =
  name &&
  twitter &&
  telegram &&
  bio &&
  image;

const hasInvite = true;

const boughtIRAM = true;

if (
  isConnected &&
  profileComplete &&
  hasInvite &&
  boughtIRAM
) {

  setWeb3Explorer(true);

  const joinedEarly = false;

const active18Days = false;

const holds30IRAM = false;

setEarlySupporter(

  joinedEarly &&

  active18Days &&

  holds30IRAM

);

}



if (

  dailyPosts >= 3 &&

  streakDays >= 30 &&

  inactiveDays < 7

) {

  setIramCommunity(true);

} else {

  setIramCommunity(false);

}

setLoading(false);

}, []);

const addActivity = (
  title: string,
  reward: string
) => {

  const newActivity = {

    title,

    reward,

    date:
      new Date().toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        }
      ),
  };

  const updatedActivities = [
    newActivity,
    ...activities,
  ];

  setActivities(updatedActivities);

  setUnreadCount((prev) => prev + 1);

  localStorage.setItem(
    "activities",
    JSON.stringify(updatedActivities)
  );
};
if (!mountedView) return null;
  return (
    <>
    {!isMobile && (
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
            {!loading && (

<img
  src={image}
  alt="profile"
  className="avatar"
/>

)}
          </div>

          <div className="profile-info">

            <div className="name-row">
              <h2>{name}</h2>
              <div
  className="verify-wrapper"
  onClick={() => setShowVerifyPopup(!showVerifyPopup)}
>

  <BadgeCheck
    className={
      followers >= 11000 &&
      loginDays >= 11 &&
      monthlyViews >= 11000
        ? "verify-icon verified"
        : "verify-icon unverified"
    }
    size={28}
  />

  <div className="verify-popup">

    <h4>Verification Requirements</h4>

    <p>• 11,000+ Followers</p>

    <p>• 11 Days Continuous Login</p>

    <p>• 11,000 Monthly Post Views</p>

  </div>

</div>
            </div>

            <div className="wallet-row">
              <span>
  {mounted && isConnected
  ? `${address?.slice(0,6)}...${address?.slice(-4)}`
  : "Wallet Not Connected"}
</span>
              <Copy
  size={18}

  style={{ cursor: "pointer" }}

  onClick={() => {

    navigator.clipboard.writeText(
      address || ""
    );

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  }}
/>

            </div>

            <div className="joined-row">
  <Calendar size={18} />
  <span>
    Joined {joinDate}
  </span>
</div>

            <button 
            className="edit-btn"
            onClick={() => setEditOpen(true)}
            >
              Edit Profile
            </button>

          </div>
        </div>

        <div className="profile-stats">

          <div className="stat-box">
            <Users size={36} />
            <h3>{profileFollowers}</h3>
            <p>Followers</p>
          </div>

          <div className="stat-box">
            <Users size={36} />
            <h3>{following}</h3>
            <p>Following</p>
          </div>

          <button
  className="follow-btn"

  onClick={() => {

    const currentFollow =
      localStorage.getItem(
        "isFollowing"
      );

    if (currentFollow === "true") {

      setProfileFollowers(0);

      setIsFollowing(false);

      localStorage.setItem(
        "isFollowing",
        "false"
      );

    } else {

      setProfileFollowers(1);

      setIsFollowing(true);

      localStorage.setItem(
        "isFollowing",
        "true"
      );

      const alreadyFollowed =
  activities.some(
    (activity) =>
      activity.title ===
      "Followed a User"
  );

if (!alreadyFollowed) {

  addActivity(
    "Followed a User",
    "+2 IRAM"
  );

}
    }
  }}
>

  <UserPlus size={24} />

  {isFollowing
    ? "Unfollow"
    : "Follow"}

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

          <button
  className="gold-btn"

  onClick={() => {

    addActivity(
      "Invited a Friend",
      "+20 IRAM"
    );

    setShareOpen(true);

  }}
>
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
            <span>{referralCode}</span>
            <Copy
  size={22}
  style={{ cursor: "pointer" }}

  onClick={() => {

    navigator.clipboard.writeText(
      referralCode
    );

    setLinkCopied(true);

    setTimeout(() => {

      setLinkCopied(false);

    }, 2000);

  }}
/>
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


          <a
  href={`https://x.com/${twitter}`}
  target="_blank"
  className="social-link"
>
  <span>@{twitter}</span>
  <ExternalLink size={20} />
</a>

          <a
  href={`https://t.me/${telegram}`}
  target="_blank"
  className="social-link"
>
  <span>t.me/{telegram}</span>
  <ExternalLink size={20} />
</a>

        </div>

      </div>



{/* RECENT ACTIVITY */}

<div
  className="activity-card glow-box"
>

  <div className="activity-summary">

    <div className="activity-left">

      <div className="activity-bell">
        <Gift size={24} />
      </div>

      <div>

        <h3>Recent Activity</h3>

        <p>
          You have {unreadCount}
          new updates
        </p>

      </div>

    </div>

    

<button
  className="view-all-btn"

  onClick={() => {

    setActivityOpen(true);

    setUnreadCount(0);

  }}
>
  View All
</button>
  </div>

</div>
      


       {/* ABOUT ME */}

<div className="about-card glow-box">

  <div className="about-top">

    <h2>About Me</h2>

    <button
      className="about-edit-btn"

      onClick={() =>
        setBioOpen(true)
      }
    >
      Edit Bio
    </button>

  </div>

  <p className="about-text">

    {bio}

  </p>

  <div className="badge-row">

{/* WEB3 EXPLORER */}

<div
  className={`profile-badge ${
    web3Explorer
      ? "active-badge"
      : "locked-badge"
  }`}

  onClick={() =>
    setShowWeb3Popup(
      !showWeb3Popup
    )
  }
>

  🔓 Web3 Explorer

</div>



{/* EARLY SUPPORTER */}

<div
  className={`profile-badge ${
    earlySupporter
      ? "🌟active-badge"
      : "locked-badge"
  }`}

  onClick={() =>
    setShowEarlyPopup(
      !showEarlyPopup
    )
  }
>

  ✨ Early Supporter

</div>

{/* IRAM COMMUNITY */}

<div
  className={`profile-badge ${
    iramCommunity
      ? "active-badge"
      : "locked-badge"
  }`}

  onClick={() =>
    setShowCommunityPopup(
      !showCommunityPopup
    )
  }
>

  🌐 IRAM Community

</div>

</div>
</div>





          
{editOpen && (

<div className="edit-popup">

  <div className="edit-box">

    <h2>Edit Profile</h2>

    <input
      type="text"
      placeholder="Enter Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />


    <input
  type="text"
  placeholder="X Username"

  value={twitter}

  onChange={(e) =>
    setTwitter(e.target.value)
  }
/>

<input
  type="text"
  placeholder="Telegram Username"

  value={telegram}

  onChange={(e) =>
    setTelegram(e.target.value)
  }
/>

    <input
  type="file"
  accept="image/*"

  onChange={(e) => {

  const file = e.target.files?.[0];

  if (file) {

    const reader = new FileReader();

    reader.onloadend = () => {

      const base64String = reader.result as string;

      setImage(base64String);

      localStorage.setItem(
        "profileImage",
        base64String
      );
    };

    reader.readAsDataURL(file);
  }
}}
/>

    <div className="popup-buttons">

      <button
        className="save-btn"
        onClick={() => {

  localStorage.setItem("profileName", name);

  localStorage.setItem("profileImage", image);

  localStorage.setItem(
  "twitter",
  twitter
);

localStorage.setItem(
  "telegram",
  telegram
);

  setEditOpen(false);
}}
      >
        Save
      </button>

      <button
        className="cancel-btn"
        onClick={() => setEditOpen(false)}
      >
        Cancel
      </button>

    </div>

  </div>

</div>

)}


{bioOpen && (

<div className="edit-popup">

  <div className="edit-box">

    <h2>Edit Bio</h2>

    <textarea

      placeholder="Write something about yourself..."

      value={bio}

      onChange={(e) =>
        setBio(e.target.value)
      }

      className="bio-textarea"
    />

    <div className="popup-buttons">

      <button
        className="save-btn"

        onClick={() => {

          localStorage.setItem(
            "profileBio",
            bio
          );

          setBioOpen(false);

        }}
      >
        Save
      </button>

      <button
        className="cancel-btn"

        onClick={() =>
          setBioOpen(false)
        }
      >
        Cancel
      </button>

    </div>

  </div>

</div>

)}


{linkCopied && (

<div className="copy-toast">

  Link Copied ✓

</div>

)}

{activityOpen && (

<div className="activity-modal">

  <div className="activity-popup">

    <div className="popup-top">

      <h2>All Activities</h2>

      <button
        onClick={() =>
          setActivityOpen(false)
        }
      >
        Close
      </button>

    </div>

    <div className="popup-activities">

      {activities.map(
        (activity, index) => (

          <div
  className={`popup-activity-item ${
  readActivities.includes(index)
    ? "read-activity"
    : "new-activity"
}`}
  key={index}

  onClick={() => {

    setSelectedActivity(activity);

   setReadActivities((prev) => {

  const updated = [
    ...prev,
    index,
  ];

  localStorage.setItem(
    "readActivities",
    JSON.stringify(updated)
  );

  return updated;

});

  }}
>



  <Gift size={18} />

  <div>

    <h4>{activity.title}</h4>

    <p>{activity.date}</p>

  </div>

</div>

))}

    </div>

  </div>

</div>

)}





{selectedActivity && (

<div className="activity-modal">

  <div className="activity-popup">

    <div className="popup-top">

      <h2>
        Activity Details
      </h2>

      <button
        onClick={() =>
          setSelectedActivity(null)
        }
      >
        Close
      </button>

    </div>

    <div className="detail-box">

      <Gift size={32} />

      <h3>
        {selectedActivity.title}
      </h3>

      <p>
        {selectedActivity.date}
      </p>

    </div>

  </div>

</div>

)}


{shareOpen && (

<div className="share-modal">

  <div className="share-box">

    <h2>Invite Friends</h2>

    <div className="share-grid">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=https://iramnexus.xyz/invite/${name}`}
        target="_blank"
      >
        <button className="share-btn">
          <MessageCircle size={26} />
          WhatsApp
        </button>
      </a>

      {/* Telegram */}
      <a
        href={`https://t.me/share/url?url=https://iramnexus.xyz/invite/${name}`}
        target="_blank"
      >
        <button className="share-btn">
          <Send size={26} />
          Telegram
        </button>
      </a>

      {/* X */}
      <a
        href={`https://twitter.com/intent/tweet?text=https://iramnexus.xyz/invite/${name}`}
        target="_blank"
      >
        <button className="share-btn">
          <Bird size={26} />
          X
        </button>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://iramnexus.xyz/invite/${name}`}
        target="_blank"
      >
        <button className="share-btn">
          <BadgeInfo size={26} />
          Facebook
        </button>
      </a>

      {/* Copy */}
      <button
        className="share-btn"
        onClick={() => {

          navigator.clipboard.writeText(
            `https://iramnexus.xyz/invite/${name}`
          );

          setLinkCopied(true);

setTimeout(() => {

  setLinkCopied(false);

}, 2000);
        }}
      >
        <Copy size={26} />
        Copy
      </button>

    </div>

    <button
      className="close-share"
      onClick={() =>
        setShareOpen(false)
      }
    >
      Close
    </button>

  </div>

</div>

)}

    </div>

)}
{copied && (

  <div className="copy-toast">

  Wallet Copied ✓

</div>

)}




{isMobile && (

<div className="mobile-profile">



<div className="mobile-profile-card">

  <div className="mobile-user-top">

    <div className="mobile-avatar-ring">

      <img
        src={image}
        alt="profile"
        className="mobile-avatar"
      />

    </div>

    <div className="mobile-user-info">

      <div className="mobile-name-row">

        <h2>{name}</h2>

       <div
  className="verify-wrapper"
  onClick={() =>
    setShowVerifyPopup(!showVerifyPopup)
  }
>

  <BadgeCheck
    className={
      followers >= 11000 &&
      loginDays >= 11 &&
      monthlyViews >= 11000
        ? "verify-icon verified"
        : "verify-icon unverified"
    }
    size={22}
  />

  {showVerifyPopup && (

    <div className="verify-popup">

      <h4>Verification Requirements</h4>

      <p>• 11,000+ Followers</p>

      <p>• 11 Days Continuous Login</p>

      <p>• 11,000 Monthly Post Views</p>

    </div>

  )}

</div>

      </div>

      <div className="mobile-wallet">

  <span>
    {mounted && isConnected
      ? `${address?.slice(0,6)}...${address?.slice(-4)}`
      : "Wallet Not Connected"}
  </span>

  <Copy
  size={16}

  style={{
    cursor: "pointer"
  }}

  onClick={async () => {

    try {

      await navigator.clipboard.writeText(
        address || ""
      );

    } catch {

      const textArea =
        document.createElement("textarea");

      textArea.value = address || "";

      document.body.appendChild(textArea);

      textArea.select();

      document.execCommand("copy");

      document.body.removeChild(textArea);

    }

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  }}
/>

</div>

      <div className="mobile-joined">

        <Calendar size={16} />

        <span>
          Joined {joinDate}
        </span>

      </div>

      {isOwnProfile ? (

  <button
    className="mobile-edit-btn"
    onClick={() => setEditOpen(true)}
  >
    Edit Profile
  </button>

) : (

  <button className="mobile-follow-btn">

    Follow

  </button>

)}
    </div>

  </div>



  <div className="mobile-stats">

  <div>

    <Users size={28} />

    <div className="mobile-stats-text">
      <h3>{profileFollowers}</h3>
      <p>Followers</p>
    </div>

  </div>

  <div>

    <Users size={28} />

    <div className="mobile-stats-text">
      <h3>{following}</h3>
      <p>Following</p>
    </div>

  </div>

</div>

</div>



<div className="mobile-grid">

  {/* invite */}

  <div className="mobile-card">

    <div className="mobile-card-head">

      <Users size={20} />

      <h3>Invite Friends</h3>

    </div>

    <p>
      Invite your friends and earn IRAM rewards together.
    </p>

    <button
      className="mobile-gold-btn"
      onClick={() => {

        addActivity(
          "Invited a Friend",
          "+20 IRAM"
        );

        setShareOpen(true);

      }}
    >
      Invite Now
    </button>

  </div>



  {/* referral */}

  <div className="mobile-card">

    <div className="mobile-card-head">

      <Share2 size={20} />

      <h3>Referral Code</h3>

    </div>

    <div className="mobile-referral">

      <span>
        #{referralCode}
      </span>

      <Copy
  size={18}

  style={{ cursor: "pointer" }}

  onClick={() => {

    navigator.clipboard.writeText(
      referralCode
    );

    setLinkCopied(true);

    setTimeout(() => {

      setLinkCopied(false);

    }, 2000);

  }}
/>

    </div>

    <p>
      Share your code and earn rewards.
    </p>

  </div>



  {/* social */}

  <div className="mobile-card">

    <div className="mobile-card-head">

      <ExternalLink size={20} />

      <h3>Social Links</h3>

    </div>

    <a
      href={`https://x.com/${twitter}`}
      target="_blank"
      className="mobile-social"
    >
      @{twitter}
    </a>

    <a
      href={`https://t.me/${telegram}`}
      target="_blank"
      className="mobile-social"
    >
      t.me/{telegram}
    </a>

  </div>

</div>



<div
  className="mobile-activity-card"
  
>

  <div className="mobile-activity-left">

    <Gift size={24} />

    <div>

      <h3>Recent Activity</h3>

      <p>
        You have {unreadCount}
        new updates
      </p>

    </div>

  </div>

  <button
  className="mobile-view-btn"

  onClick={() => {

    setActivityOpen(true);

    setUnreadCount(0);

  }}
>

    View All

  </button>

</div>

{activityOpen && (

<div className="activity-modal">

  <div className="activity-popup">

    <div className="popup-top">

      <h2>All Activities</h2>

      <button
        onClick={() =>
          setActivityOpen(false)
        }
      >
        Close
      </button>

    </div>

    <div className="popup-activities">

      {activities.map(
        (activity, index) => (

          <div
            className={`popup-activity-item ${
              readActivities.includes(index)
                ? "read-activity"
                : "new-activity"
            }`}
            key={index}
            onClick={() => {

  setSelectedActivity(activity);

  setReadActivities((prev) => {

    const updated = [
      ...prev,
      index,
    ];

    localStorage.setItem(
      "readActivities",
      JSON.stringify(updated)
    );

    return updated;

  });

}}
          >

            <Gift size={18} />

            <div>

              <h4>{activity.title}</h4>

              <p>{activity.date}</p>

            </div>

          </div>

      ))}

    </div>

  </div>
{selectedActivity && (

<div className="activity-modal">

  <div className="activity-popup">

    <div className="popup-top">

      <h2>
        Activity Details
      </h2>

      <button
        onClick={() =>
          setSelectedActivity(null)
        }
      >
        Close
      </button>

    </div>

    <div className="detail-box">

      <Gift size={32} />

      <h3>
        {selectedActivity.title}
      </h3>

      <p>
        {selectedActivity.date}
      </p>

    </div>

  </div>

</div>

)}
</div>




)}




<div className="mobile-about-card">

  <div className="mobile-about-top">

    <h2>About Me</h2>

    <button
  onClick={() =>
    setBioOpen(true)
  }
>
  Edit Bio
</button>

  </div>

  <p>
    {bio}
  </p>

  <div className="mobile-tags">

   <span
  className={
    web3Explorer
      ? "active-badge"
      : "locked-badge"
  }

  onClick={() =>
    setShowWeb3Popup(true)
  }
>

  {web3Explorer
    ? "✨ Web3 Explorer"
    : "🔒 Web3 Explorer"}

</span>

    <span
  className={
    earlySupporter
      ? "early-active"
      : "early-locked"
  }

  onClick={() =>
    setShowEarlyPopup(true)
  }
>

  {earlySupporter
    ? "🌟 Early Supporter"
    : "🔒 Early Supporter"}

</span>

    <span
  className={
    iramCommunity
      ? "community-active"
      : "community-locked"
  }

  onClick={() =>
    setShowCommunityPopup(true)
  }
>

  {iramCommunity
    ? "👑 IRAM Community"
    : "🔒 IRAM Community"}

</span>

  </div>

</div>

<div className="mobile-bottom-nav">

  <div

  onClick={() =>
    router.push("/dashboard")
  }
>
  Dashboard
</div>

  <div>
    Explore
  </div>

  <div>
    Rewards
  </div>

  <div>
    Leaderboard
  </div>

  <div
  className="active-nav"

  onClick={() =>
    router.push("/profile")
  }
>
  Profile
</div>

</div>
{editOpen && (

<div className="edit-popup">

  <div className="edit-box">

    <h2>Edit Profile</h2>

    <input
      type="text"
      placeholder="Enter Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      type="text"
      placeholder="X Username"
      value={twitter}
      onChange={(e) =>
        setTwitter(e.target.value)
      }
    />

    <input
      type="text"
      placeholder="Telegram Username"
      value={telegram}
      onChange={(e) =>
        setTelegram(e.target.value)
      }
    />

    <input
  type="file"
  accept="image/*"

  onChange={(e) => {

    const file = e.target.files?.[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {

        const base64String =
          reader.result as string;

        setImage(base64String);

        localStorage.setItem(
          "profileImage",
          base64String
        );

      };

      reader.readAsDataURL(file);

    }

  }}
/>

    <div className="popup-buttons">

      <button
        className="save-btn"
        onClick={() => {

          localStorage.setItem(
            "profileName",
            name
          );

          localStorage.setItem(
            "twitter",
            twitter
          );

          localStorage.setItem(
            "telegram",
            telegram
          );

          setEditOpen(false);

        }}
      >
        Save
      </button>

      <button
        className="cancel-btn"
        onClick={() =>
          setEditOpen(false)
        }
      >
        Cancel
      </button>

    </div>

  </div>

</div>






)}

{shareOpen && (

<div className="share-modal">

  <div className="share-box">

    <h2>Invite Friends</h2>

    <div className="share-grid">

      <a
        href={`https://wa.me/?text=https://iramnexus.xyz/invite/${name}`}
        target="_blank"
      >
        <button className="share-btn">
          <MessageCircle size={26} />
          WhatsApp
        </button>
      </a>

      <a
        href={`https://t.me/share/url?url=https://iramnexus.xyz/invite/${name}`}
        target="_blank"
      >
        <button className="share-btn">
          <Send size={26} />
          Telegram
        </button>
      </a>

      <a
        href={`https://twitter.com/intent/tweet?text=https://iramnexus.xyz/invite/${name}`}
        target="_blank"
      >
        <button className="share-btn">
          <Bird size={26} />
          X
        </button>
      </a>


      <a
  href={`https://www.facebook.com/sharer/sharer.php?u=https://iramnexus.xyz/invite/${name}`}
  target="_blank"
>
  <button className="share-btn">
    <BadgeInfo size={26} />
    Facebook
  </button>
</a>

      <button
        className="share-btn"
        onClick={() => {

          navigator.clipboard.writeText(
            `https://iramnexus.xyz/invite/${name}`
          );

          setLinkCopied(true);

          setTimeout(() => {

            setLinkCopied(false);

          }, 2000);

        }}
      >
        <Copy size={26} />
        Copy
      </button>

    </div>

    <button
      className="close-share"
      onClick={() =>
        setShareOpen(false)
      }
    >
      Close
    </button>

  </div>

</div>



)}

{bioOpen && (

<div className="edit-popup">

  <div className="edit-box">

    <h2>Edit Bio</h2>

    <textarea
      maxLength={120}
      value={bio}
      onChange={(e) =>
        setBio(e.target.value)
      }
      placeholder="Write your bio..."
      className="bio-textarea"
    />

    <p className="bio-count">
      {bio.length}/120
    </p>

    <div className="popup-buttons">

      <button
        className="save-btn"
        onClick={() => {

          localStorage.setItem(
            "profileBio",
            bio
          );

          setBioOpen(false);

        }}
      >
        Save
      </button>

      <button
        className="cancel-btn"
        onClick={() =>
          setBioOpen(false)
        }
      >
        Cancel
      </button>

    </div>

  </div>

</div>

)}


{showWeb3Popup && (

<div className="activity-modal">

  <div className="activity-popup">

    <div className="popup-top">

      <h2>
        Web3 Explorer
      </h2>

      <button
        onClick={() =>
          setShowWeb3Popup(false)
        }
      >
        Close
      </button>

    </div>

    <div className="detail-box">

      <div className="web3-tasks">

  <div className={`web3-task ${
    isConnected
      ? "completed"
      : "locked"
  }`}>
    Wallet Connected
  </div>

  <div className={`web3-task ${
    image
      ? "completed"
      : "locked"
  }`}>
    Profile Picture Added
  </div>

  <div className={`web3-task ${
    bio?.length >= 20
      ? "completed"
      : "locked"
  }`}>
    Bio Added
  </div>

  <div className={`web3-task ${
  twitter || telegram
    ? "completed"
    : "locked"
}`}>
  Social Linked
</div>

  <div className={`web3-task ${
  profileFollowers >= 1
    ? "completed"
    : "locked"
}`}>
  Successful Invite
</div>

  <div className={`web3-task ${
  isFollowing
    ? "completed"
    : "locked"
}`}>
  Buy $10 IRAM
</div>

</div>
    </div>

  </div>

</div>

)}



{showEarlyPopup && (

<div className="activity-modal">

  <div className="activity-popup">

    <div className="popup-top">

      <h2>
        Early Supporter
      </h2>

      <button
        onClick={() =>
          setShowEarlyPopup(false)
        }
      >
        Close
      </button>

    </div>

    <div className="detail-box">

      <div className="web3-tasks">

        <div className={`web3-task ${
          joinedEarly
            ? "completed"
            : "locked"
        }`}>
          First 5000 Users
        </div>

        <div className={`web3-task ${
          active18Days
            ? "completed"
            : "locked"
        }`}>
          18 Days Active
        </div>

        <div className={`web3-task ${
          holds30IRAM
            ? "completed"
            : "locked"
        }`}>
          Hold $30 Worth IRAM
        </div>

      </div>

    </div>

  </div>

</div>

)}

{showCommunityPopup && (

<div className="activity-modal">

  <div className="activity-popup">

    <div className="popup-top">

      <h2>
        IRAM Community
      </h2>

      <button
        onClick={() =>
          setShowCommunityPopup(false)
        }
      >
        Close
      </button>

    </div>

    <div className="detail-box">

      <div className="web3-tasks">

        <div className={`web3-task ${
          dailyPosts >= 3
            ? "completed"
            : "locked"
        }`}>
          Daily 3 IRAM Posts
        </div>

        <div className={`web3-task ${
          streakDays >= 30
            ? "completed"
            : "locked"
        }`}>
          30 Days Active Posting
        </div>

        <div className={`web3-task ${
          inactiveDays < 7
            ? "completed"
            : "locked"
        }`}>
          Stay Active
        </div>

      </div>

    </div>

  </div>

</div>

)}


{linkCopied && (

  <div className="copy-toast">

    Link Copied ✓

  </div>





)}

</div>




)}

</>
);
}