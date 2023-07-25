import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PropTypes from "prop-types";
import Description from "./Description";
import TextArea from "./TextArea";
import edit from "../../assets/edit.svg";

Header.propTypes = {
  person: PropTypes.object.isRequired,
  setEditForm: PropTypes.func,
};

function Header({ person, setEditForm }) {
  const placeholder = "Write your professional summary here...";
  const [isDescEdited, setDescEdited] = useState(false);
  const [desc, setDesc] = useState(placeholder);
  const [parent] = useAutoAnimate();

  const decideContent = () => {
    if (isDescEdited === true) {
      return (
        <TextArea
          setDesc={setDesc}
          isDescEdited={isDescEdited}
          setDescEdited={setDescEdited}
          placeholder={placeholder}
        />
      );
    }

    return (
      <Description
        desc={desc}
        isDescEdited={isDescEdited}
        setDescEdited={setDescEdited}
      />
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl py-1 font-medium">
        {person.name}{" "}
        <button onClick={() => setEditForm((prev) => !prev)}>
          <img src={edit} alt="edit" className="w-8 h-8" />
        </button>
      </h1>
      <h2 className="text-xl py-1">{person.profession}</h2>
      <p className="flex gap-2">
        <span className="font-bold">Address</span>
        <span>
          {person.city}, {person.country} {person.postal}
        </span>
      </p>
      <p className="flex gap-2">
        <span className="font-bold">Phone</span>
        <span>{person.phone}</span>
      </p>
      <p className="flex gap-2">
        <span className="font-bold">Email</span>
        <span>{person.email}</span>
      </p>
      <div ref={parent}>{decideContent()}</div>
    </div>
  );
}

export default Header;
