function FormPhone() {
  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className="p-1 font-medium">
        Phone
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        className="m-1 p-1 font-medium border-2 border-slate-700"
      />
    </div>
  );
}

export default FormPhone;
