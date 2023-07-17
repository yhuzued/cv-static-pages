import FormName from "./FormName";
import FormEmail from "./FormEmail";
import FormCity from "./FormCity";
import FormPhone from "./FormPhone";
import CreateButton from "./CreateButton";
import PropTypes from "prop-types";
import FormProfession from "./FormProfession";
import FormCountry from "./FormCountry";
import FormPostal from "./FormPostal";

Form.propTypes = {
  person: PropTypes.object,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  postal: PropTypes.string.isRequired,
  setPerson: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  setProfession: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setPostal: PropTypes.func.isRequired,
};

export default function Form({
  setPerson,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  profession,
  setProfession,
  city,
  setCity,
  country,
  setCountry,
  postal,
  setPostal,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      return;
    }

    setPerson({ name, email, phone, profession, city, country, postal });
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
        <FormProfession setProfession={setProfession} />
        <FormEmail setEmail={setEmail} />
        <FormCity setCity={setCity} />
        <FormCountry setCountry={setCountry} />
        <FormPhone setPhone={setPhone} />
        <FormPostal setPostal={setPostal} />
        <CreateButton />
      </form>
    </>
  );
}
