import PropTypes from "prop-types";

FormCity.propTypes = {
  setCity: PropTypes.func.isRequired,
  city: PropTypes.string,
};

function FormCity({ city, setCity }) {
  function handleCity(e) {
    setCity(e.target.value);
  }

  let editCity;
  if (!(city === "")) {
    editCity = city;
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="p-1 font-medium">
        City
      </label>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="DKI Jakarta"
        className="m-1 p-1 font-medium border-2 border-slate-700"
        minLength={5}
        onChange={handleCity}
        required
        defaultValue={editCity}
      />
    </div>
  );
}

export default FormCity;
