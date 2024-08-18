import styles from "./styles/Drills.module.css";

export default function Drills() {
  return (
    <>
      <div className={styles.introSection}>
        <h2 className={styles.introSubtitle}>Kickstart Your Journey</h2>
        <p className={styles.introParagraph}>
          This is the best way to start for those who want to get into
          hackathons or case competitions but don&apos;t know what to prepare
          for. Our resources will guide you through essential skills, from
          coding drills to front-end practice, and tips for presenting with
          confidence.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <a href="codingdrills.html" className={styles.card}>
          <img
            src="assets/pl1.jpg"
            alt="Placeholder Image 1"
            className={styles.cardImage}
          />
          <h3 className={styles.cardSubtitle}>Coding Drills</h3>
        </a>

        <a href="frontendpractice.html" className={styles.card}>
          <img
            src="assets/pl2.jpg"
            alt="Placeholder Image 2"
            className={styles.cardImage}
          />
          <h3 className={styles.cardSubtitle}>Front-End Practice</h3>
        </a>

        <a href="presentingtips.html" className={styles.card}>
          <img
            src="assets/pl3.jpg"
            alt="Placeholder Image 3"
            className={styles.cardImage}
          />
          <h3 className={styles.cardSubtitle}>Presenting Tips</h3>
        </a>
      </div>
    </>
  );
}
