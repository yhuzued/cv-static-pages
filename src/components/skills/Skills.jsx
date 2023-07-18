import { useState } from "react";
import Title from "./Title";
import FormSkills from "./FormSkills";
import Items from "./Items";

export default function Skills() {
  const [list, setList] = useState([]);
  const [skill, setSkill] = useState({});

  return (
    <>
      <Title list={list} setList={setList} skill={skill} setSkill={setSkill} />
      <FormSkills
        skill={skill}
        setSkill={setSkill}
        list={list}
        setList={setList}
      />
      <Items list={list} />
    </>
  );
}
