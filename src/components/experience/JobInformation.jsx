import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PropTypes from "prop-types";
import InputAchievement from "./InputAchievement";
import trash from "../../assets/trash.svg";

JobInformation.propTypes = {
  info: PropTypes.object,
};

export default function JobInformation({ info }) {
  const [achvList, setAchvList] = useState([]);
  const [achievement, setAchievement] = useState("");
  const [parent] = useAutoAnimate();

  function deleteAchievement(id) {
    const newList = achvList.filter((l) => l.id !== id);
    setAchvList(newList);
  }

  const displayList = achvList.map((l) => {
    return (
      <div key={l.id} className="flex gap-5 items-center my-2">
        <li>{l.achievement}</li>
        <button onClick={() => deleteAchievement(l.id)}>
          <img src={trash} alt="trash" className="w-6 h-6" />
        </button>
      </div>
    );
  });

  return (
    <div className="w-full flex flex-col">
      <h3 className="text-lg font-medium drop-shadow-sm">{info.jobTitle}</h3>
      <div className="italic drop-shadow-sm">
        {info.employer}, {info.city}
      </div>
      <div ref={parent}>
        <InputAchievement
          setAchvList={setAchvList}
          achievement={achievement}
          setAchievement={setAchievement}
        />
      </div>
      <ul className="list-disc mx-5 mt-2" ref={parent}>
        {displayList}
      </ul>
    </div>
  );
}
