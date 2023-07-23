import PropTypes from "prop-types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import convertDate from "../../convertDate";
import JobInformation from "./JobInformation";

Items.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};

export default function Items({ list, setList }) {
  const [parent] = useAutoAnimate();

  function deleteExperience(id) {
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  }

  const dateInformation = (l) => {
    return (
      <div className="w-1/2 text-[17px] border-r-2">
        <p className="drop-shadow-lg">{convertDate(l.startDate)} -</p>
        <p className="drop-shadow-lg">{convertDate(l.endDate)}</p>
      </div>
    );
  };

  const deleteButton = (l) => {
    return (
      <>
        <button
          className="bg-red-500 hover:bg-red-700 text-slate-100 px-2 py-1 rounded-sm"
          onClick={() => deleteExperience(l.id)}
        >
          Delete
        </button>
      </>
    );
  };

  const experience = list.map((l) => (
    <div
      key={l.id}
      className="flex gap-5 items-start p-3 border-t-2 not-first:border-b-0"
    >
      {dateInformation(l)}
      <JobInformation info={l} />
      {deleteButton(l)}
    </div>
  ));

  return (
    <>
      <ul ref={parent}>{experience}</ul>
    </>
  );
}
