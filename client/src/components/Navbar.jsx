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
        <a href="/" className={styles.navLink}>
          Home
        </a>
        {user && (
          <a href="/profile" className={styles.navLink}>
            Profile
          </a>
        )}
        <a href="/feed" className={styles.navLink}>
          Feed
        </a>
        <a href="/drills" className={styles.navLink}>
          Drills
        </a>
        <a href="/achievements" className={styles.navLink}>
          Achievements
        </a>
      </div>

      <div>
        {!user ? (
          <a href="/login" className={styles.navLogin}>
            Login / Register
          </a>
        ) : (
          <button onClick={handleLogout} className={styles.authButton}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}
