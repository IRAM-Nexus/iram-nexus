export default function Sidebar({ open }: { open: boolean }) {
  return (
    <div className={`sidebar ${open ? "show" : ""}`}>
      
      <div 
  className="profile-icon"
  onClick={() => window.location.href='/profile'}
>
        <img src="https://via.placeholder.com/50" alt="profile" />
      </div>

      <div className="divider"></div>

      <ul className="menu">
        <li onClick={() => window.location.href='/profile'}>
  Profile
</li>
        <li onClick={() => window.location.href='/notifications'}>
  Notifications
</li>
        <li onClick={() => window.location.href='/pulse'}>
  IRAM Pulse
</li>
        <li
  onClick={() => window.location.href='/daily-tasks'}
>
  Daily Tasks
</li>
        <li>Compaings / Events</li>
        <li>Rewards</li>
        <li>Support</li>
        <li>Policy</li>
        <li>About</li>
      </ul>

    </div>
  );
}