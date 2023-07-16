import Form from "./components/form/Form";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [person, setPerson] = useState({
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    phone: "087465875456",
  });

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
        <section className="p-8 bg-white p-3 rounded-md drop-shado-md flex flex-col">
          {form()}
          <Header person={person} />
        </section>
      </main>
    </>
  );
}

export default App;
