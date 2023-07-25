import PropTypes from "prop-types";

FormPostal.propTypes = {
  setPostal: PropTypes.func.isRequired,
  postal: PropTypes.string,
};

function FormPostal({ postal, setPostal }) {
  function handlePostal(e) {
    setPostal(e.target.value);
  }

  let editPostal;
  if (!(postal === "")) {
    editPostal = postal;
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="p-1 font-medium">
        Postal
      </label>
      <input
        type="text"
        name="postal"
        id="postal"
        className="m-1 p-1 font-medium border-2 border-slate-700"
        minLength={5}
        placeholder="17865"
        required
        onChange={handlePostal}
        defaultValue={editPostal}
      />
    </div>
  );
}

export default FormPostal;
