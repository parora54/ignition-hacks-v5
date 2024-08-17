import { useState } from "react";
import Comp from "./components/Comp";

export default function Feed() {
  const [comps, setComps] = useState({});
  const [sortOrder, setSortOrder] = useState("recent");
  const [filter, setFilter] = useState(""); // default no filter -> empty string

  // fetch logic for retrieving Comps (API.GET [ALL])
  const compsList = [];

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
      {compsList.map((index) => {
        return <Comp key={index} />;
      })}
    </div>
  );
}
