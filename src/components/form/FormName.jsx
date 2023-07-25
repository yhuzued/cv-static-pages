import PropTypes from "prop-types";

FormName.propTypes = {
  setName: PropTypes.func.isRequired,
  name: PropTypes.string,
};

function FormName({ name, setName }) {
  function handleName(e) {
    setName(e.target.value);
  }

  let editName;
  if (!(name === "")) {
    editName = name;
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="p-1 font-medium">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="m-1 p-1 font-medium border-2 border-slate-700"
        minLength={5}
        required
        onChange={handleName}
        placeholder="John Doe"
        defaultValue={editName}
      />
    </div>
  );
}

export default FormName;
