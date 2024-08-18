import styles from "../styles/Navbar.module.css";
import { useAuth } from "../AuthProvider";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <a href="/" id="home" className={styles.navLink}>
          Home
        </a>
        {user && (
          <a href="/profile" id="profile" className={styles.navLink}>
            Profile
          </a>
        )}
        {!user && (
          <a href="/login" id="login" className={styles.navLink}>
            Login / Register
          </a>
        )}
        <a href="/feed" id="feed" className={styles.navLink}>
          Feed
        </a>
        <a href="/drills" id="drills" className={styles.navLink}>
          Drills
        </a>
        <a href="/achievements" id="achievements" className={styles.navLink}>
          Achievements
        </a>
      </div>
      {user && (
        <button onClick={handleLogout} className={styles.authButton}>
          Log Out
        </button>
      )}
    </nav>
  );
}
