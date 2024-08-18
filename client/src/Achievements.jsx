import styles from "./styles/Achievements.module.css";

function Achievements() {
  return (
    <div className={styles.achievementsContainer}>
      <div className={styles.achievementItem}>
        <h2 className={styles.achievementTitle}>Achievement Title</h2>
        <p className={styles.achievementDate}>Date</p>
      </div>
      {/* More achievements */}
    </div>
  );
}

export default Achievements;
