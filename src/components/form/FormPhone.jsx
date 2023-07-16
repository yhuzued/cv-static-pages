import PropTypes from "prop-types";

FormPhone.propTypes = {
  setPhone: PropTypes.func.isRequired,
};

function FormPhone({ setPhone }) {
  function handlePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className="p-1 font-medium">
        Phone
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        className="m-1 p-1 font-medium border-2 border-slate-700"
        onChange={handlePhone}
      />
    </div>
  );
}

export default FormPhone;
