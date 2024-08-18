import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Comp.module.css";

export default function Comp({ data }) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/feed/${data.id}`);
  };

  return (
    <div onClick={clickHandler} className={styles.card}>
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
