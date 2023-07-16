import Form from "./components/userForm/Form";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [person, setPerson] = useState({});

  useEffect(() => {
    console.log(person);
  }, [person]);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const form = () => {
    if (isEmpty(person)) {
      return (
        <Form
          name={name}
          email={email}
          phone={phone}
          setPerson={setPerson}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
        />
      );
    }
  };

  return (
    <>
      <main className="m-5">
        <h1 className="m-3 text-center text-xl font-medium text-slate-100">
          CV Generator
        </h1>
        {form()}
      </main>
    </>
  );
}

export default App;
