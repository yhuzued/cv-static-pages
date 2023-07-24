import PropTypes from "prop-types";

AddButton.propTypes = {
  setShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default function AddButton({ showForm, setShowForm }) {
  let description;
  if (showForm === false) {
    description = "Add";
  } else {
    description = "Close";
  }

  return (
    <button
      className="bg-blue-900 text-slate-100 p-1 px-2 hover:bg-blue-700 cursor-pointer"
      onClick={() => setShowForm((prev) => !prev)}
    >
      {description}
    </button>
  );
}
