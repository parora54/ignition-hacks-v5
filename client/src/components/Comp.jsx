import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

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
      <div className="card-content">
        <img
          src="https://via.placeholder.com/100"
          alt="Card Image"
          className="card-image"
        />
        <div className="card-info">
          <h3 className="card-title">{data.title}</h3>
          <ul className="info-list">
            <li>Type: {data.type}</li>
            <li>Difficulty: {data.difficulty}</li>
            <li>Date: {data.time}</li>
            <li>Theme: {data.theme}</li>
          </ul>
        </div>
      </div>
      <div className="card-hover-info">v Hover for more info v</div>
      <div className="more-info">
        <p>{data.description}</p>
      </div>
    </div>
  );
}

Comp.propTypes = {
  data: PropTypes.object,
};
