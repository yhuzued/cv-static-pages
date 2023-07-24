import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { EducationContext } from "./Context";

export default function Education() {
  const {
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
    setEducation,
    setList,
  } = useContext(EducationContext);

  function handleSubmit(e) {
    e.preventDefault();
    const id = uuidv4();
    const newEducation = {
      id,
      school,
      location,
      degree,
      study,
      dateStart,
      dateEnd,
    };

    setEducation(newEducation);

    setList((prev) => [...prev, newEducation]);
    e.target.reset();
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="schoolName">School Name</label>
      <input
        className="outline-none border-2 border-black py-1 px-2 rounded-sm"
        type="text"
        name="schoolName"
        id="schoolName"
        onChange={(e) => setSchool(e.target.value)}
      />
      <label htmlFor="schoolLocation">School Location</label>
      <input
        className="outline-none border-2 border-black py-1 px-2 rounded-sm"
        type="text"
        name="schoolLocation"
        id="schoolLocation"
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="degree">Degree</label>
      <input
        className="outline-none border-2 border-black py-1 px-2 rounded-sm"
        type="text"
        name="degree"
        id="degree"
        onChange={(e) => setDegree(e.target.value)}
      />
      <label htmlFor="study">Study</label>
      <input
        className="outline-none border-2 border-black py-1 px-2 rounded-sm"
        type="text"
        name="study"
        id="study"
        onChange={(e) => setStudy(e.target.value)}
      />
      <label htmlFor="startSchool">Date Start School</label>
      <input
        className="outline-none border-2 border-black py-1 px-2 rounded-sm"
        type="month"
        name="startSchool"
        id="startSchool"
        onChange={(e) => setDateStart(e.target.value)}
      />
      <label htmlFor="endSchool">Date End School</label>
      <input
        className="outline-none border-2 border-black py-1 px-2 rounded-sm"
        type="month"
        name="endSchool"
        id="endSchool"
        onChange={(e) => setDateEnd(e.target.value)}
      />
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-700 text-slate-100 w-fit px-2 py-1 my-1 rounded-sm"
      >
        Submit
      </button>
    </form>
  );
}
