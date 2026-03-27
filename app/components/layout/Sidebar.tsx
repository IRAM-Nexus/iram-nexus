export default function Sidebar({ open }: { open: boolean }) {
  return (
    <div className={`sidebar ${open ? "show" : ""}`}>
      
      <div className="profile-icon">
        <img src="https://via.placeholder.com/50" alt="profile" />
      </div>

      <div className="divider"></div>

      <ul className="menu">
        <li>Profile</li>
        <li>Notifications</li>
        <li>IRAM Pulse</li>
        <li>Daily Tasks</li>
        <li>Create Tasks</li>
        <li>Rewards</li>
        <li>Support</li>
        <li>Policy</li>
        <li>About</li>
      </ul>

    </div>
  );
}