import PropTypes from "prop-types";
import edit from "../../assets/edit.svg";

Description.propTypes = {
  desc: PropTypes.string.isRequired,
  setDescEdited: PropTypes.func.isRequired,
};

function Description({ desc, setDescEdited }) {
  return (
    <div className="mt-4">
      <div className="flex gap-3 item-center">
        <h1 className="text-xl mb-2">Professional Summary </h1>
        <button onClick={() => setDescEdited(true)}>
          <img src={edit} alt="edit" className="w-5 h-5" />
        </button>
      </div>

      <p className="py-1">{desc}</p>
    </div>
  );
}

export default Description;
