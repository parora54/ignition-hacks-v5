import { useState, useEffect } from "react";
import Comp from "./components/Comp";

export default function Feed() {
  const [comps, setComps] = useState([]); // list after filtering from search bar
  const [originalComps, setOriginalComps] = useState([]); // default list
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
      if (order === "name") {
        return a.title.localeCompare(b.title); // Ensure `title` is a property of `comp`
      }
      return 0;
    });
    setComps(sortedComps);
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
      <button onClick={() => handleSort("name")}>Sort Alphabetically</button>
      <div>
        {comps.map((comp, index) => (
          <Comp key={index} data={comp} />
        ))}
      </div>
    </div>
  );
}
