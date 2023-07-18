export default function FormExperience() {
  return (
    <form onSubmit={console.log("submit")} className="my-5">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col">
          <label htmlFor="job">Job Title</label>
          <input
            className="outline-none p-1 border-2 border-slate-700 rounded-sm"
            type="text"
            name="job"
            id="job"
            placeholder="Sr. Accountant"
          />
          <label htmlFor="employer">Employer</label>
          <input
            className="outline-none p-1 border-2 border-slate-700 rounded-sm"
            type="text"
            name="employer"
            id="employer"
            placeholder="Monster Inc."
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="cityProvince">City Province</label>
          <input
            className="outline-none p-1 border-2 border-slate-700 rounded-sm"
            type="text"
            name="cityProvince"
            id="cityProvince"
            placeholder="DKI Jakarta"
          />
          <label htmlFor="country">Country</label>
          <input
            className="outline-none p-1 border-2 border-slate-700 rounded-sm"
            type="text"
            name="country"
            id="country"
            placeholder="Indonesia"
          />
        </div>

        <div className="col-span-2 flex flex-col">
          <label htmlFor="startDate">Start Date</label>
          <input
            className="outline-none p-1 border-2 border-slate-700 rounded-sm"
            type="month"
            name="startDate"
            id="startDate"
          />
          <label htmlFor="endDate">End Date</label>
          <input
            className="outline-none p-1 border-2 border-slate-700 rounded-sm"
            type="month"
            name="endDate"
            id="endDate"
          />
        </div>
      </div>
    </form>
  );
}
