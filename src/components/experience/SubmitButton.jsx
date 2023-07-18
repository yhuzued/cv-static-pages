import PropTypes from "prop-types";

FormExperience.propTypes = {
  showForm: PropTypes.bool,
  setShow: PropTypes.func,
};

export default function FormExperience({ showForm, setShow }) {
  function close(e) {
    e.preventDefault();
    setShow(!showForm);
  }

  return (
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
  );
}
