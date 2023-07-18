import PropTypes from "prop-types";

AddButton.propTypes = {
  setShowForm: PropTypes.func.isRequired,
};

export default function AddButton({ setShowForm }) {
  return (
    <button
      className="bg-blue-900 text-slate-100 p-1 px-2 hover:bg-blue-700 cursor-pointer"
      onClick={() => setShowForm(true)}
    >
      Add
    </button>
  );
}
