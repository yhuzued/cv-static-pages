import PropTypes from "prop-types";

TextArea.propTypes = {
  setDesc: PropTypes.func.isRequired,
  isDescEdited: PropTypes.bool.isRequired,
  setDescEdited: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

function TextArea({ setDesc, isDescEdited, setDescEdited, placeholder }) {
  return (
    <>
      <textarea
        name="desc"
        id="desc"
        className="w-full h-[100px] border-2 outline-none p-2 outline-bg-slate-700 rounded-sm border-2 border-slate-400 focus:border-slate-700"
        autoFocus
        placeholder="Write description here..."
        defaultValue={placeholder}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-700 text-slate-100 px-3 py-1 rounded-sm hover:bg-blue-500"
        onClick={() => setDescEdited(!isDescEdited)}
      >
        Update
      </button>
    </>
  );
}

export default TextArea;
