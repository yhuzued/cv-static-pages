import PropTypes from "prop-types";

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Title(props) {
  return (
    <div className="flex justify-between w-full border-b-4 items-center">
      <h2 className="text-2xl my-4 ">Skills</h2>
      {props.children}
    </div>
  );
}
