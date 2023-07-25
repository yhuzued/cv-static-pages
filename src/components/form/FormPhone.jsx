import PropTypes from "prop-types";

FormPhone.propTypes = {
  setPhone: PropTypes.func.isRequired,
  phone: PropTypes.string,
};

function FormPhone({ phone, setPhone }) {
  function handlePhone(e) {
    setPhone(e.target.value);
  }

  let editPhone;
  if (!(phone === "")) {
    editPhone = phone;
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
        placeholder="+62 812 3456 7890"
        required
        onChange={handlePhone}
        defaultValue={editPhone}
      />
    </div>
  );
}

export default FormPhone;
