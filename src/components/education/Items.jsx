import PropTypes from "prop-types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import formatDate from "../../convertDate";

Items.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};

export default function Items({ list, setList }) {
  const [parent] = useAutoAnimate();

  if (list.length === 0) {
    return <p>No education</p>;
  }

  function deleteItem(e, id) {
    e.preventDefault();
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  }

  const date = (l) => (
    <div className="w-1/4 text-[17px] border-r-2">
      <p className="drop-shadow-lg font-medium">{formatDate(l.dateStart)} -</p>
      <p className="drop-shadow-lg font-medium">{formatDate(l.dateEnd)}</p>
    </div>
  );

  const school = (l) => (
    <div className="w-full flex flex-col">
      <h2 className="text-xl font-medium">
        {l.degree}: {l.study}
      </h2>
      <p className="text-lg italic">
        {l.school} - {l.location}
      </p>
    </div>
  );

  const button = (l) => (
    <button
      className="bg-red-500 hover:bg-red-700 text-slate-100 px-2 py-1 rounded-sm"
      onClick={(e) => deleteItem(e, l.id)}
    >
      Delete
    </button>
  );

  const items = list.map((l) => (
    <li key={l.id} className="flex gap-5 items-start p-3 m-2">
      {date(l)}
      {school(l)}
      {button(l)}
    </li>
  ));

  return <ul ref={parent}>{items}</ul>;
}
