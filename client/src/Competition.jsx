import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/Competition.module.css";

export default function Competition() {
  const { id } = useParams();
  const [comp, setComp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    compFetch();
  }, [id]);

  const compFetch = async () => {
    setLoading(true);
    try {
      const url = `https://aspire-web-app.onrender.com/api/competitions/${id}`;
      console.log("Fetching data from:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Comps data from API:", data);
        setComp(data);
        setError(null);
      } else {
        throw new Error(data.message || "Retrieval failed.");
      }
    } catch (error) {
      console.error("Competition Retrieval error:", error);
      setComp(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFavouriteClick = () => {
    setIsFavourite((prev) => !prev);
    // Logic to add to user's favourites (wrapped around private route?)
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!comp) return <div className={styles.noData}>No data found</div>;

  return (
    <div className={styles.competitionDetails}>
      <div className={styles.competitionHeader}>
        <h1 className={styles.competitionTitle}>{comp.title}</h1>
        <p className={styles.competitionTime}>{comp.time}</p>
        <button
          className={`${styles.favouriteButton} ${
            isFavourite ? styles.favourited : ""
          }`}
          onClick={handleFavouriteClick}
        >
          {isFavourite ? "Added to Favourites" : "Add to Favourites"}
        </button>
      </div>
      {comp.photo_url && (
        <div className={styles.imageContainer}>
          <img
            src={comp.photo_url}
            alt={`${comp.title} banner`}
            className={styles.competitionImage}
          />
        </div>
      )}
      <div className={styles.competitionInfo}>
        <p>
          <strong>Description:</strong> {comp.description}
        </p>
        <p>
          <strong>Type:</strong> {comp.type}
        </p>
        <p>
          <strong>Difficulty:</strong> {comp.difficulty}
        </p>
        <p>
          <strong>Education:</strong> {comp.education}
        </p>
        <p>
          <strong>Theme:</strong> {comp.theme}
        </p>
      </div>
    </div>
  );
}
