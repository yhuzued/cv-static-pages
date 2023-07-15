function FormName() {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="p-1 font-medium">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="m-1 p-1 font-medium border-2 border-slate-700"
      />
    </div>
  );
}

export default FormName;
