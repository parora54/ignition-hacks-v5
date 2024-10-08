import { useAuth } from "./AuthProvider";
import styles from "./styles/Profile.module.css";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1>
          Welcome, <span className={styles.profileName}>{user.name}</span>!
        </h1>
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.profileDetail}>
          <strong>Your Registered Email:</strong> {user.email}
        </div>
      </div>
    </div>
  );
}
