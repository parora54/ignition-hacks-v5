import "./test.css";
import { useAuth } from "../AuthProvider";

export default function Navbar() {
  const { user, logout } = useAuth(); // profile link only appears with user authorization

  const handleLogout = () => {
    logout(); // Call the logout function
    window.location.href = "/login"; // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <a href="/" className="nav-link">
        Home
      </a>
      {user && (
        <a href="/profile" className="nav-link">
          Profile
        </a>
      )}
      <a href="/login" className="nav-link">
        Login
      </a>
      <a href="/feed" className="nav-link">
        Feed
      </a>
      <a href="/drills" className="nav-link">
        Drills
      </a>
      <a href="/achievements" className="nav-link">
        Achievements
      </a>
      {user && (
        <button onClick={handleLogout} className="nav-link">
          Log Out
        </button>
      )}
    </nav>
  );
}
