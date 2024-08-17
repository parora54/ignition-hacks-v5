import PropTypes from "prop-types";

export default function Comp({ data }) {
  //some fetch logic or pass in props -> returns Object {title, desc, difficulty, date}

  //favourite a comp logic (API.POST)
  // use profileId, if given, to post a favourite to db

  return (
    <>
      <div>{data.title}</div>
      <div>{data.desc}</div>
      <div>{data.difficulty}</div>
      <div>{data.date}</div>
    </>
  );
}

Comp.propTypes = {
  data: PropTypes.object,
};
