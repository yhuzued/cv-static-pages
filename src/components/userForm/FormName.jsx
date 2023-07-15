function FormName() {
  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="p-1 font-medium">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="m-1 p-1 font-medium border-2 border-slate-700"
        minLength={5}
      />
    </div>
  );
}

export default FormName;
