import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Comp.module.css";

export default function Comp({ data }) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/feed/${data.id}`);
  };

  return (
    <div
      style={{
        cursor: "pointer",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
      onClick={clickHandler}
      className="card"
    >
      <div className={styles.cardContent}>
        <img
          src="https://via.placeholder.com/100"
          alt="Card Image"
          className={styles.cardImage}
        />
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{data.title}</h3>
          <ul className={styles.infoList}>
            <li className={styles.infoListItem}>Type: {data.type}</li>
            <li className={styles.infoListItem}>
              Difficulty: {data.difficulty}
            </li>
            <li className={styles.infoListItem}>Date: {data.date}</li>
            <li className={styles.infoListItem}>Theme: {data.theme}</li>
          </ul>
        </div>
      </div>
      <div className={styles.cardHoverInfo}>v Hover for more info v</div>
      <div className={styles.moreInfo}>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

Comp.propTypes = {
  data: PropTypes.object,
};
