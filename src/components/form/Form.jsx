import FormName from "./FormName";
import FormEmail from "./FormEmail";
import FormPhone from "./FormPhone";
import CreateButton from "./CreateButton";
import PropTypes from "prop-types";

Form.propTypes = {
  person: PropTypes.object,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  setPerson: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
};

export default function Form({
  setPerson,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      return;
    }

    setPerson({ name, email, phone });
  }

  return (
    <>
      <form
        className="flex flex-col"
        method="get"
        action="/"
        onSubmit={handleSubmit}
      >
        <FormName setName={setName} />
        <FormEmail setEmail={setEmail} />
        <FormPhone setPhone={setPhone} />
        <CreateButton />
      </form>
    </>
  );
}
