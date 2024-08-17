import PropTypes from "prop-types";

export default function Comp({ profileId, title, desc, difficulty, date }) {
  //some fetch logic or pass in props -> returns Object {title, desc, difficulty, date}

  //favourite a comp logic (API.POST)
  // use profileId, if given, to post a favourite to db

  return (
    <>
      <div>{title}</div>
      <div>{desc}</div>
      <div>{difficulty}</div>
      <div>{date}</div>
    </>
  );
}

Comp.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  difficulty: PropTypes.string,
  date: PropTypes.string,
};
