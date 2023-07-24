import PropTypes from "prop-types";
import plus from "../../assets/plus.svg";
import close from "../../assets/close.svg";

AddButton.propTypes = {
  setShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default function AddButton({ showForm, setShowForm }) {
  let icon;
  if (showForm === false) {
    icon = <img src={plus} alt="plus" className="w-8 h-12" />;
  } else {
    icon = <img src={close} alt="close" className="w-8 h-12" />;
  }

  return <button onClick={() => setShowForm((prev) => !prev)}>{icon}</button>;
}
