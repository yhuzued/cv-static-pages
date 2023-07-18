import AddButton from "./AddButton";
import PropTypes from "prop-types";

Title.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
  skill: PropTypes.object.isRequired,
  setSkill: PropTypes.func.isRequired,
};

export default function Title({ skill, setSkill, list, setList }) {
  return (
    <div className="flex justify-between w-full border-b-2 items-center">
      <h2 className="text-2xl my-4 ">Skills</h2>
      <AddButton
        skill={skill}
        setSkill={setSkill}
        list={list}
        setList={setList}
      />
    </div>
  );
}
