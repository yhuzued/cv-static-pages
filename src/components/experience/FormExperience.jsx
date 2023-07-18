export default function FormExperience() {
  return (
    <form onSubmit={console.log("submit")} className="my-5">
      <div className="mt-3 flex gap-1">
        <button
          type="submit"
          className="bg-teal-700 text-slate-100 px-2 py-1 hover:bg-teal-500"
        >
          Save
        </button>
        <button
          className="bg-red-700 text-slate-100 px-2 py-1 hover:bg-red-500"
          onClick={close}
        >
          Close
        </button>
      </div>

      <div>
        <label htmlFor="job">Job Title</label>
        <input type="text" name="job" id="job" />
        <label htmlFor="employer">Employer</label>
        <input type="text" name="employer" id="employer" />
        <label htmlFor="cityProvince">City Province</label>
        <input type="text" name="cityProvince" id="cityProvince" />
        <label htmlFor="country">Country</label>
        <input type="text" name="country" id="country" />
        <label htmlFor="startDate">Start Date</label>
        <input type="month" name="startDate" id="startDate" />
        <label htmlFor="endDate">End Date</label>
        <input type="month" name="endDate" id="endDate" />
      </div>
    </form>
  );
}
