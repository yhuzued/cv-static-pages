import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import SubmitButton from "./SubmitButton";

FormExperience.propTypes = {
  showForm: PropTypes.bool,
  setShow: PropTypes.func,
  setJobTitle: PropTypes.func,
  setEmployer: PropTypes.func,
  setCity: PropTypes.func,
  setCountry: PropTypes.func,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  experience: PropTypes.object,
  setExperience: PropTypes.func,
  jobTitle: PropTypes.string,
  employer: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  list: PropTypes.array,
  setList: PropTypes.func,
};

export default function FormExperience({
  showForm,
  jobTitle,
  employer,
  city,
  country,
  startDate,
  endDate,
  setShow,
  setJobTitle,
  setEmployer,
  setCity,
  setCountry,
  setStartDate,
  setEndDate,
  setExperience,
  list,
  setList,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    const newExperience = {
      id: uuidv4(),
      city,
      country,
      employer,
      endDate,
      jobTitle,
      startDate,
    };

    setExperience(newExperience);

    setList([...list, newExperience]);
    e.target.reset();
  }

  const jobInformation = (
    <div className="flex flex-col">
      <label htmlFor="job">Job Title</label>
      <input
        className="outline-none border-2 p-2 rounded-sm border-slate-500"
        type="text"
        name="job"
        id="job"
        placeholder="Sr. Accountant"
        onChange={(e) => setJobTitle(e.target.value)}
        autoFocus
        required
      />
      <label htmlFor="employer">Employer</label>
      <input
        className="outline-none border-2 p-2 rounded-sm border-slate-500"
        type="text"
        name="employer"
        id="employer"
        placeholder="Monster Inc."
        onChange={(e) => setEmployer(e.target.value)}
      />
    </div>
  );

  const cityInformation = (
    <div className="flex flex-col">
      <label htmlFor="cityProvince">City Province</label>
      <input
        className="outline-none border-2 p-2 rounded-sm border-slate-500"
        type="text"
        name="cityProvince"
        id="cityProvince"
        placeholder="DKI Jakarta"
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <label htmlFor="country">Country</label>
      <input
        className="outline-none border-2 p-2 rounded-sm border-slate-500"
        type="text"
        name="country"
        id="country"
        placeholder="Indonesia"
        onChange={(e) => setCountry(e.target.value)}
        required
      />
    </div>
  );

  const timeInformation = (
    <div className="col-span-2 flex flex-col">
      <label htmlFor="startDate">Start Date</label>
      <input
        className="outline-none border-2 p-2 rounded-sm border-slate-500"
        type="month"
        name="startDate"
        id="startDate"
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <label htmlFor="endDate">End Date</label>
      <input
        className="outline-none border-2 p-2 rounded-sm border-slate-500"
        type="month"
        name="endDate"
        id="endDate"
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
    </div>
  );

  return (
    <>
      <p className="bg-yellow-200 text-slate-900 p-2 my-3 rounded-sm">
        Input your professional experience chronologically.
      </p>
      <form onSubmit={handleSubmit} className="my-5">
        <div className="grid grid-cols-2 gap-3">
          {jobInformation}
          {cityInformation}
          {timeInformation}
        </div>
        <SubmitButton showForm={showForm} setShow={setShow} />
      </form>
    </>
  );
}
