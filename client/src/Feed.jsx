import { useState, useEffect } from "react";
import Comp from "./components/Comp";
import styles from "./styles/Feed.module.css"; // Import the CSS module

export default function Feed() {
  const [comps, setComps] = useState([]);
  const [originalComps, setOriginalComps] = useState([]);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState(new Set());
  const [compType, setCompType] = useState(new Set());
  const [sortOrder, setSortOrder] = useState(""); // State for sorting order

  useEffect(() => {
    compsList();
  }, [difficulty, compType, sortOrder]); // Add sortOrder to the dependency array

  const compsList = async () => {
    try {
      const query = new URLSearchParams();
      difficulty.forEach((d) => query.append("difficulty", d));
      compType.forEach((t) => query.append("type", t));

      const url = `http://127.0.0.1:5000/api/competitions?${query.toString()}`;
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
        let sortedData = data;

        if (sortOrder) {
          sortedData = data.sort((a, b) => {
            const dateA = new Date(a.time);
            const dateB = new Date(b.time);

            if (sortOrder === "asc") {
              return dateA - dateB;
            } else {
              return dateB - dateA;
            }
          });
        }

        setComps(sortedData);
        setOriginalComps(sortedData);
        return true;
      } else {
        throw new Error(data.message || "Retrieval failed.");
      }
    } catch (error) {
      console.error("Case Comp Retrieval error:", error);
      return false;
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm) {
      setComps(
        originalComps.filter((comp) =>
          comp.title.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setComps(originalComps);
    }
  };

  const handleDifficultyChange = (event) => {
    const value = event.target.value;
    setDifficulty((prev) => {
      const updated = new Set(prev);
      if (updated.has(value)) {
        updated.delete(value);
      } else {
        updated.add(value);
      }
      return updated;
    });
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setCompType((prev) => {
      const updated = new Set(prev);
      if (value === "both") {
        updated.add("Case Competition");
        updated.add("Hackathon");
      } else {
        updated.clear();
        updated.add(value);
      }
      return updated;
    });
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className={styles.feedBody}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchBar}
          value={search}
          onChange={handleSearch}
        />
        <select
          className={styles.filterDropdown}
          onChange={handleTypeChange}
          value=""
        >
          <option value="both">Type: Both</option>
          <option value="Case Competition">Type: Case Competitions</option>
          <option value="Hackathon">Type: Hackathons</option>
        </select>

        <div className={styles.filterCheckboxes}>
          <label>
            <input
              type="checkbox"
              value="Beginner"
              onChange={handleDifficultyChange}
              checked={difficulty.has("Beginner")}
            />
            Beginner
          </label>
          <label>
            <input
              type="checkbox"
              value="Intermediate"
              onChange={handleDifficultyChange}
              checked={difficulty.has("Intermediate")}
            />
            Intermediate
          </label>
          <label>
            <input
              type="checkbox"
              value="Advanced"
              onChange={handleDifficultyChange}
              checked={difficulty.has("Advanced")}
            />
            Advanced
          </label>
        </div>

        <select className={styles.sortDropdown} onChange={handleSortChange}>
          <option value="">Sort by Date</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <div className={styles.resultsCount}>
          <p>{comps.length} results found</p>
        </div>
      </div>

      <div className={styles.cardGrid}>
        {comps.map((comp) => (
          <Comp key={comp.id} data={comp} />
        ))}
      </div>
    </div>
  );
}
