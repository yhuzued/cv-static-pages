import PropTypes from "prop-types";

FormProfession.propTypes = {
  setProfession: PropTypes.func.isRequired,
};

function FormProfession({ setProfession }) {
  function handleProfession(e) {
    setProfession(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="p-1 font-medium">
        Profession
      </label>
      <input
        type="text"
        name="profession"
        id="profession"
        className="m-1 p-1 font-medium border-2 border-slate-700"
        minLength={5}
        placeholder="Sr. Accountant"
        required
        onChange={handleProfession}
      />
    </div>
  );
}

export default FormProfession;
