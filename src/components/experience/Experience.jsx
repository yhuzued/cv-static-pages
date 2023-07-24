import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FormExperience from "./FormExperience";
import Items from "./Items";
import plus from "../../assets/plus.svg";
import close from "../../assets/close.svg";

export default function Experience() {
  const [showForm, setShow] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [list, setList] = useState([]);
  const [experience, setExperience] = useState({});
  const [parent] = useAutoAnimate();

  let icon;
  if (showForm === false) {
    icon = <img src={plus} alt="plus" className="w-8 h-12" />;
  } else {
    icon = <img src={close} alt="close" className="w-8 h-12" />;
  }

  const title = (
    <div className="flex justify-between w-full border-b-2 items-center">
      <h1 className="text-2xl my-4 ">Professional Experience</h1>
      <button onClick={() => setShow((prev) => !prev)}>{icon}</button>
    </div>
  );

  let form;
  if (showForm === true) {
    form = (
      <FormExperience
        showForm={showForm}
        jobTitle={jobTitle}
        employer={employer}
        city={city}
        country={country}
        startDate={startDate}
        endDate={endDate}
        setShow={setShow}
        setJobTitle={setJobTitle}
        setEmployer={setEmployer}
        setCity={setCity}
        setCountry={setCountry}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        experience={experience}
        setExperience={setExperience}
        list={list}
        setList={setList}
      />
    );
  }

  let showList;
  if (list.length === 0) {
    showList = <p>No experience</p>;
  } else {
    showList = <Items list={list} setList={setList} />;
  }

  return (
    <>
      {title}
      <div ref={parent}>{form}</div>
      <div ref={parent}>{showList}</div>
    </>
  );
}
