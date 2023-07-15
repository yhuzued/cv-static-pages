import FormName from "./FormName";
import FormEmail from "./FormEmail";
import FormPhone from "./FormPhone";
import CreateButton from "./CreateButton";

export default function Form() {
  return (
    <>
      <form
        action="/"
        method="get"
        className="bg-white p-3 rounded-md drop-shado-md flex flex-col"
      >
        <FormName />
        <FormEmail />
        <FormPhone />
        <CreateButton />
      </form>
    </>
  );
}
