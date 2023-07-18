import PropTypes from "prop-types";

Items.propTypes = {
  list: PropTypes.array.isRequired,
};

export default function Items({ list }) {
  const skills = list.map((l) => <li key={l.id}>{l.title}</li>);

  return (
    <>
      <ul className="list-disc m-5 ml-[10vw]">{skills}</ul>
    </>
  );
}
