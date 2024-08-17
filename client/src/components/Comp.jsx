import PropTypes from "prop-types";

export default function Comp({ data }) {
  //some fetch logic or pass in props -> returns Object {title, desc, difficulty, date}

  //favourite a comp logic (API.POST)
  // use profileId, if given, to post a favourite to db

  return (
    <>
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.type}</div>
      <div>{data.difficulty}</div>
    </>
  );
}

Comp.propTypes = {
  data: PropTypes.object,
};
