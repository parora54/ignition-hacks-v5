import { useState, useEffect } from "react";
import Comp from "./components/Comp";

export default function Feed() {
  const [comps, setComps] = useState([]);
  const [originalComps, setOriginalComps] = useState([]);
  const [sortOrder, setSortOrder] = useState("recent");
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState(new Set());
  const [compType, setCompType] = useState(new Set());

  useEffect(() => {
    // Fetch the comps data when the component mounts or filters change
    compsList();
  }, [difficulty, compType]);

  // Fetch logic for retrieving Comps (API.GET [ALL])
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
        setComps(data);
        setOriginalComps(data); // Store the original data
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

  // Sort function
  const handleSort = (order) => {
    const sortedComps = [...comps].sort((a, b) => {
      if (order === "recent") {
        return new Date(b.time) - new Date(a.time);
      } else if (order === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    setComps(sortedComps);
    setSortOrder(order);
  };

  // Handle difficulty filter
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

  // Handle competition type filter
  const handleTypeChange = (event) => {
    const value = event.target.value;
    setCompType((prev) => {
      const updated = new Set(prev);
      if (updated.has(value)) {
        updated.delete(value);
      } else {
        updated.add(value);
      }
      return updated;
    });
  };

  return (
    <div>
      <h1>This is the Feed Page</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />

      <div>
        <h2>Filter by Difficulty</h2>
        <label>
          <input
            type="checkbox"
            value="Beginner"
            checked={difficulty.has("Beginner")}
            onChange={handleDifficultyChange}
          />
          Beginner
        </label>
        <label>
          <input
            type="checkbox"
            value="Intermediate"
            checked={difficulty.has("Intermediate")}
            onChange={handleDifficultyChange}
          />
          Intermediate
        </label>
        <label>
          <input
            type="checkbox"
            value="Advanced"
            checked={difficulty.has("Advanced")}
            onChange={handleDifficultyChange}
          />
          Advanced
        </label>
      </div>

      <div>
        <h2>Filter by Competition Type</h2>
        <label>
          <input
            type="checkbox"
            value="Hackathon"
            checked={compType.has("Hackathon")}
            onChange={handleTypeChange}
          />
          Hackathon
        </label>
        <label>
          <input
            type="checkbox"
            value="Case Competition"
            checked={compType.has("Case Competition")}
            onChange={handleTypeChange}
          />
          Case Competition
        </label>
      </div>

      <button onClick={() => handleSort("name")}>Sort Alphabetically</button>

      <div>
        {comps.map((comp, index) => (
          <>
            <br />
            <Comp key={index} data={comp} />
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
