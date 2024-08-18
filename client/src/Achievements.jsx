import { useAuth } from "./AuthProvider";
import styles from "./styles/Achievements.module.css";

export default function Achievements() {
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <h1>{user.name}</h1>
        <img src="/assets/pic.jpg" alt="Profile Picture" />
      </div>

      <h2>Progress to Achievements:</h2>
      <ul className={styles.achievementList}>
        <li>
          <h3>Intro to CSS, HTML</h3>
          <span className={styles.bar}>
            <span className={styles.html}></span>
          </span>
        </li>

        <li>
          <h3>How to strengthen your pitch</h3>
          <span className={styles.bar}>
            <span className={styles.two}></span>
          </span>
        </li>

        <li>
          <h3>Intro to AI and Machine Learning</h3>
          <span className={styles.bar}>
            <span className={styles.three}></span>
          </span>
        </li>

        <li>
          <h3>How to Tackle Case Competitions</h3>
          <span className={styles.bar}>
            <span className={styles.four}></span>
          </span>
        </li>
      </ul>
    </div>
  );
}
