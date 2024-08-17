import Comp from "./components/Comp";

export default function Feed() {
  // fetch logic for retrieving Comps (API.GET [ALL])
  const compsList = [];

  // search function

  // sort function

  // filter function

  return (
    <div>
      {compsList.map((index) => {
        return <Comp key={index} />;
      })}
    </div>
  );
}
