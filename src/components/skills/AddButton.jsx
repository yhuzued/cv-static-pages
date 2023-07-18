export default function AddButton() {
  function handleClick() {
    console.log("yahu");
  }

  return (
    <button
      className="bg-blue-900 text-slate-100 p-1 px-2"
      onClick={handleClick}
    >
      Add
    </button>
  );
}
