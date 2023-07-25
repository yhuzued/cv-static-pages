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

  const [isEditForm, setEditForm] = useState(false);

  const cv = () => {
    if (!isEditForm) {
      return (
        <Form
          person={person}
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
          setEditForm={setEditForm}
        />
      );
    }

    return (
      <>
        <Header person={person} setEditForm={setEditForm} />
        <Skills />
        <Experience>
          <FormExperience />
          <SubmitButton />
        </Experience>
        <Education />
      </>
    );
  };

  return (
    <>
      <main className="m-5 lg:w-2/3 print:w-full">
        <h1 className="print:hidden m-3 text-center text-xl font-medium text-slate-100">
          CV Generator
        </h1>
        <section className="p-8 bg-white p-3 rounded-md drop-shado-md">
          {cv()}
        </section>
      </main>
    </>
  );
}

export default App;
