import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

FormSkills.propTypes = {
  list: PropTypes.array.isRequired,
  skill: PropTypes.object.isRequired,
  setList: PropTypes.func.isRequired,
  setSkill: PropTypes.func.isRequired,
};

export default function FormSkills({ list, skill, setList, setSkill }) {
  function handeleSubmit(e) {
    e.preventDefault();

    if (e.target.value === "") return;

    setList([...list, skill]);
    e.target.reset();
  }

  function handleInput(e) {
    setSkill({ id: uuidv4(), title: e.target.value });
  }

  return (
    <form onSubmit={handeleSubmit}>
      <input
        type="text"
        name="skills"
        id="skills"
        placeholder="Write your skill here..."
        onChange={handleInput}
        autoFocus
      />
      <button type="submit">Save</button>
    </form>
  );
}
