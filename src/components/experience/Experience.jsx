import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FormExperience from "./FormExperience";
import Items from "./Items";

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

  function handleClick(e) {
    e.preventDefault();
    setShow(true);
  }

  const title = (
    <div className="flex justify-between w-full border-b-2 items-center">
      <h1 className="text-2xl my-4 ">Professional Experience</h1>
      <button
        className="bg-blue-900 text-slate-100 p-1 px-2 hover:bg-blue-700 cursor-pointer"
        onClick={handleClick}
      >
        Add
      </button>
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
