import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

FormSkills.propTypes = {
  skill: PropTypes.object.isRequired,
  setList: PropTypes.func.isRequired,
  setSkill: PropTypes.func.isRequired,
  setShowForm: PropTypes.func.isRequired,
};

export default function FormSkills({ skill, setList, setSkill, setShowForm }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(skill).length === 0) return;

    const updatedSkill = { ...skill, id: uuidv4() };
    setSkill(updatedSkill);
    setList((prevList) => [...prevList, updatedSkill]);

    e.target.reset();
    setSkill({});
  }

  function close(e) {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <input
        className="outline-none border-2 md:w-1/3 p-2 rounded-sm border-slate-500"
        type="text"
        name="skills"
        id="skills"
        placeholder="Write your skill here..."
        onChange={(e) => setSkill({ title: e.target.value })}
        autoFocus
      />
      <div className="my-3 flex gap-1">
        <button
          type="submit"
          className="bg-teal-700 text-slate-100 px-2 py-1 hover:bg-teal-500"
        >
          Save
        </button>
        <button
          className="bg-red-700 text-slate-100 px-2 py-1 hover:bg-red-500"
          onClick={close}
        >
          Close
        </button>
      </div>
    </form>
  );
}
