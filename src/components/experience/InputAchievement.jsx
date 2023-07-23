import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useState } from "react";

InputAchievement.propTypes = {
  setAchievement: PropTypes.func.isRequired,
  setAchvList: PropTypes.func.isRequired,
  achievement: PropTypes.string,
};

export default function InputAchievement({
  setAchvList,
  achievement,
  setAchievement,
}) {
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (achievement === "") return;

    const id = uuidv4();
    const objAchievemnet = { id, achievement };
    setAchvList((prev) => [...prev, objAchievemnet]);
    setAchievement("");
    e.target.reset();
  }

  function close(e) {
    e.preventDefault();
    setShowForm(false);
  }

  const form = () => {
    if (showForm === false) {
      return (
        <button
          className="bg-blue-700 hover:bg-blue-900 px-2 py-1 rounded-sm text-slate-100 w-fit my-1"
          onClick={() => setShowForm(true)}
        >
          Add Achievement
        </button>
      );
    }

    return (
      <form className="my-5 w-full" onSubmit={handleSubmit}>
        <input
          className="outline-none w-full border-2 p-2 rounded-sm border-slate-500"
          type="text"
          name="skills"
          id="skills"
          placeholder="Write your achievment here..."
          autoFocus
          onChange={(e) => setAchievement(e.target.value)}
        />
        <div className="mt-3 flex gap-1">
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
  };

  return form();
}
