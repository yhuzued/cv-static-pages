import Form from "./components/form/Form";
import Header from "./components/header/Header";
import { useState } from "react";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import FormExperience from "./components/experience/FormExperience";
import SubmitButton from "./components/experience/SubmitButton";
import Education from "./components/education/Education";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [person, setPerson] = useState({});

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
          profession={profession}
          city={city}
          country={country}
          postal={postal}
          setPerson={setPerson}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setProfession={setProfession}
          setCity={setCity}
          setCountry={setCountry}
          setPostal={setPostal}
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
        <section className="p-8 bg-white p-3 rounded-md drop-shado-md">
          {form()}
          <Header person={person} />
          <Skills />
          <Experience>
            <FormExperience />
            <SubmitButton />
          </Experience>
          <Education />
        </section>
      </main>
    </>
  );
}

export default App;
