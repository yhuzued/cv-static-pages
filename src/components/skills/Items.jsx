import PropTypes from "prop-types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import trash from "../../assets/trash.svg";

Items.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};

export default function Items({ list, setList }) {
  const [parent] = useAutoAnimate();

  function deleteItem(id) {
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  }

  const items = (title) => {
    return <li className="w-1/4 my-2">{title}</li>;
  };

  const button = (id) => {
    return (
      <button id={id} onClick={() => deleteItem(id)}>
        <img src={trash} alt="trash-icon" className="w-6 h-6" />
      </button>
    );
  };

  const skills = list.map((l) => (
    <div key={l.id} className="flex gap-1 items-center">
      {items(l.title)}
      {button(l.id)}
    </div>
  ));

  return (
    <>
      <ul className="list-disc ml-12 mt-3" ref={parent}>
        {skills}
      </ul>
    </>
  );
}
