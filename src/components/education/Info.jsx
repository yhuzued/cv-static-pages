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
      <Form />
    </>
  );
}
