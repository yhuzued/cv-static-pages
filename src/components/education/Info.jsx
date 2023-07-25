import PropTypes from "prop-types";
import Form from "./Form";

Info.propTypes = {
  showInfo: PropTypes.bool,
};

export default function Info({ showInfo }) {
  if (showInfo === false) {
    return;
  }

  return (
    <>
      <p className="bg-yellow-200 text-slate-900 p-2 my-3 rounded-sm">
        Input your education chronologically.
      </p>
      <Form />
    </>
  );
}
