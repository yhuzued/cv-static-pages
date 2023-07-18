export default function SubmitButton() {
  return (
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
  );
}
