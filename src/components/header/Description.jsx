import PropTypes from "prop-types";

Description.propTypes = {
  desc: PropTypes.string.isRequired,
  setDescEdited: PropTypes.func.isRequired,
};

function Description({ desc, setDescEdited }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl mb-2">Professional Summary</h2>
      <button
        className="float float-right px-2 py-1 rounded-sm drop-shadow-sm bg-blue-900 text-slate-50 hover:bg-blue-700"
        onClick={() => setDescEdited(true)}
      >
        Edit
      </button>
      <p className="py-1">{desc}</p>
    </div>
  );
}

export default Description;
