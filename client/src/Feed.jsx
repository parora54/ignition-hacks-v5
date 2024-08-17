import { useState, useEffect } from "react";
import Comp from "./components/Comp";

export default function Feed() {
  const [comps, setComps] = useState(null);
  const [sortOrder, setSortOrder] = useState("recent");
  const [filter, setFilter] = useState(""); // default no filter -> empty string

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
        return true;
      } else {
        throw new Error(data.message || "Retrieval failed.");
      }
    } catch (error) {
      console.error("Case Comp Retrieval error:", error);
      return false;
    }
  };

  const handleSearch = () => {
    // fetch logic -> startsWith on db side
  };

  // sort function
  const handleSort = (order) => {
    const sortedComps = [...comps].sort(() => {
      // logic for sorting comps based on
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
      This is Feed Page
      {compsList.map((comp, index) => (
        <Comp key={index} data={comp} />
      ))}
    </div>
  );
}
