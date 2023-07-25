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
  setEditForm: PropTypes.func,
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
  setEditForm,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      return;
    }

    setPerson({ name, email, phone, profession, city, country, postal });
    setEditForm((prev) => !prev);
  }

  return (
    <>
      <form method="get" action="/" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
          <div className="col-grid-1">
            <FormName name={name} setName={setName} />
            <FormProfession
              profession={profession}
              setProfession={setProfession}
            />
          </div>

          <div className="col-grid-1">
            <FormEmail email={email} setEmail={setEmail} />
            <FormPhone phone={phone} setPhone={setPhone} />
          </div>

          <div className="col-span-2">
            <FormCity city={city} setCity={setCity} />
            <FormCountry country={country} setCountry={setCountry} />
            <FormPostal postal={postal} setPostal={setPostal} />
            <CreateButton />
          </div>
        </div>
      </form>
    </>
  );
}
