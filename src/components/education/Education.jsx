import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { EducationContext } from "./Context";
import Info from "./Info";
import Items from "./Items";

export default function Education() {
  const [showInfo, setInfo] = useState(false);
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [study, setStudy] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [list, setList] = useState([]);
  const [education, setEducation] = useState({});
  const [parent] = useAutoAnimate();

  useEffect(() => {
    console.log(list);
  });

  let add = showInfo === true ? "Close" : "Add";

  return (
    <>
      <div className="flex justify-between w-full border-b-2 items-center">
        <h2 className="text-2xl my-4 ">Education</h2>
        <button
          className="bg-blue-900 text-slate-100 px-2 py-1 rounded-sm hover:bg-blue-700"
          onClick={() => setInfo((prev) => !prev)}
        >
          {add}
        </button>
      </div>
      <EducationContext.Provider
        value={{
          school,
          setSchool,
          location,
          setLocation,
          degree,
          setDegree,
          study,
          setStudy,
          dateStart,
          setDateStart,
          dateEnd,
          setDateEnd,
          education,
          setEducation,
          setList,
        }}
      >
        <div ref={parent}>
          <Info showInfo={showInfo} list={list} />
        </div>
        <Items list={list} setList={setList} />
      </EducationContext.Provider>
    </>
  );
}
