import styles from "./styles/Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.welcomeText}>Welcome to Aspire</h1>
      <p className={styles.subheading}>
        Your Gateway to a Thriving Career in Business and Technology
      </p>

      <section className={styles.featureSection}>
        <div className={styles.feature}>
          <h2>Explore Career Opportunities</h2>
          <p>
            Dive into the world of business and tech, and discover the paths
            that align with your passions and goals.
          </p>
        </div>

        <div className={styles.feature}>
          <h2>Prepare for Success</h2>
          <p>
            Equip yourself with top-notch resources and strategies for
            hackathons and case competitions.
          </p>
        </div>

        <div className={styles.feature}>
          <h2>Tailored Competitions</h2>
          <p>
            Find and conquer challenges that match your education and experience
            level, designed to push you forward.
          </p>
        </div>

        <div className={styles.feature}>
          <h2>Track Your Achievements</h2>
          <p>
            Monitor your progress, earn accolades, and propel yourself towards
            excellence in your field.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
