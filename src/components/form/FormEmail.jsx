import PropTypes from "prop-types";

FormEmail.propTypes = {
  setEmail: PropTypes.func.isRequired,
  email: PropTypes.string,
};

function FormEmail({ email, setEmail }) {
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  let editEmail;
  if (!(email === "")) {
    editEmail = email;
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
        defaultValue={editEmail}
      />
    </div>
  );
}

export default FormEmail;
