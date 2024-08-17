import { useState, useEffect } from "react";
import Comp from "./components/Comp";

export default function Feed() {
  const [comps, setComps] = useState([]);
  const [originalComps, setOriginalComps] = useState([]);
  const [sortOrder, setSortOrder] = useState("recent");
  const [filter, setFilter] = useState(""); // default no filter -> empty string
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch the comps data when the component mounts
    compsList();
  }, []);

  // fetch logic for retrieving Comps (API.GET [ALL])
  const compsList = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/competitions", {
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
      // If search term is empty, show the original comps
      setComps(originalComps);
    }
  };

  // sort function
  const handleSort = (order) => {
    const sortedComps = [...comps].sort((a, b) => {
      if (order === "recent") {
        return new Date(b.date) - new Date(a.date); // Ensure `date` is a property of `comp`
      } else if (order === "name") {
        return a.title.localeCompare(b.title); // Ensure `title` is a property of `comp`
      }
      return 0;
    });
    setComps(sortedComps);
    setSortOrder(order);
  };

  // filter function
  const handleFilter = (event) => {
    setFilter(event.target.value);
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
      <button onClick={() => handleSort("recent")}>Sort by Recent</button>
      <button onClick={() => handleSort("name")}>Sort Alphabetically</button>
      <div>
        {comps.map((comp, index) => (
          <>
            <Comp key={index} data={comp} />
            <br></br>
          </>
        ))}
      </div>
    </div>
  );
}
