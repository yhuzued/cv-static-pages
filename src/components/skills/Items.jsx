import PropTypes from "prop-types";

Items.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};

export default function Items({ list, setList }) {
  function deleteItem(id) {
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  }

  const items = (title) => {
    return <li className="w-1/4 my-2">{title}</li>;
  };

  const button = (id) => {
    return (
      <button
        id={id}
        className="bg-red-500 px-2 py-1 text-slate-100 rounded-sm hover:bg-red-700"
        onClick={() => deleteItem(id)}
      >
        Delete
      </button>
    );
  };

  const skills = list.map((l) => (
    <div key={l.id} className="flex gap-5 items-center">
      {items(l.title)}
      {button(l.id)}
    </div>
  ));

  return (
    <>
      <ul className="list-disc ml-12 mt-3">{skills}</ul>
    </>
  );
}
