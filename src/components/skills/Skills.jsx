import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Title from "./Title";
import FormSkills from "./FormSkills";
import Items from "./Items";
import AddButton from "./AddButton";

export default function Skills() {
  const [list, setList] = useState([]);
  const [skill, setSkill] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [parent] = useAutoAnimate();

  const form = () => {
    if (showForm === true) {
      return (
        <FormSkills
          skill={skill}
          setSkill={setSkill}
          setList={setList}
          setShowForm={setShowForm}
        />
      );
    }
  };

  let items;
  if (list.length === 0) {
    items = <p>No skill</p>;
  } else [(items = <Items list={list} setList={setList} />)];

  return (
    <>
      <Title list={list} setList={setList} skill={skill} setSkill={setSkill}>
        <AddButton setShowForm={setShowForm} />
      </Title>
      <div ref={parent}>{form()}</div>
      <div ref={parent}>{items}</div>
    </>
  );
}
