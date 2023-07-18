import PropTypes from "prop-types";

FormEmail.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

function FormEmail({ setEmail }) {
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="p-1 font-medium">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john@doe.com"
        className="m-1 p-1 font-medium border-2 border-slate-700"
        required
        onChange={handleEmail}
      />
    </div>
  );
}

export default FormEmail;
