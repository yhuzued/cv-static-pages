import PropTypes from "prop-types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import convertDate from "../../convertDate";
import JobInformation from "./JobInformation";
import trash from "../../assets/trash.svg";

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
      <div className="w-1/4 text-[17px] border-r-2">
        <p className="drop-shadow-lg font-medium">
          {convertDate(l.startDate)} -
        </p>
        <p className="drop-shadow-lg font-medium">{convertDate(l.endDate)}</p>
      </div>
    );
  };

  const deleteButton = (l) => {
    return (
      <>
        <button onClick={() => deleteExperience(l.id)}>
          <img src={trash} alt="close" className="w-10 h-10" />
        </button>
      </>
    );
  };

  const experience = list.map((l) => (
    <div key={l.id} className="flex gap-5 items-start p-3 m-2">
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
