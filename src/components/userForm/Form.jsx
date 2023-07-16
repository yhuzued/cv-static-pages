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
    setPerson({ name, email, phone });
  }

  return (
    <>
      <form
        method="get"
        action="/"
        className="bg-white p-3 rounded-md drop-shado-md flex flex-col"
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
