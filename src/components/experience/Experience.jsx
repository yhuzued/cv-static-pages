import { useState } from "react";
import FormExperience from "./FormExperience";

export default function Experience() {
  const [showForm, setShow] = useState(false);

  const form = () => {
    if (showForm === true) {
      return <FormExperience showForm={showForm} setShow={setShow} />;
    }
  };

  const title = () => {
    return (
      <div className="flex justify-between w-full border-b-2 items-center">
        <h1 className="text-2xl my-4 ">Professional Experience</h1>
        <button
          className="bg-blue-900 text-slate-100 p-1 px-2 hover:bg-blue-700 cursor-pointer"
          onClick={() => setShow(true)}
        >
          Add
        </button>
      </div>
    );
  };

  return (
    <>
      {title()}
      {form()}
    </>
  );
}
