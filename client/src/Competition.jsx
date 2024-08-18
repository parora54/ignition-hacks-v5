import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Competition.css";

export default function Competition() {
  const { id } = useParams();
  const [comp, setComp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    compFetch();
  }, [id]);

  const compFetch = async () => {
    setLoading(true);
    try {
      const url = `http://127.0.0.1:5000/api/competitions/${id}`;
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

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!comp) return <div className="no-data">No data found</div>;

  return (
    <div className="competition-details">
      <div className="competition-header">
        <h1 className="competition-title">{comp.title}</h1>
        <p className="competition-time">{comp.time}</p>
      </div>
      <div className="competition-info">
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