import PropTypes from "prop-types";

FromCountry.propTypes = {
  setCountry: PropTypes.func.isRequired,
};

function FromCountry({ setCountry }) {
  function handleCountry(e) {
    setCountry(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="p-1 font-medium">
        Country
      </label>
      <input
        type="text"
        name="country"
        id="country"
        className="m-1 p-1 font-medium border-2 border-slate-700"
        minLength={5}
        onChange={handleCountry}
      />
    </div>
  );
}

export default FromCountry;
