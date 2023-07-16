import PropTypes from "prop-types";
import Description from "./Description";
import TextArea from "./TextArea";
import { useState } from "react";

Header.propTypes = {
  person: PropTypes.object.isRequired,
};

function Header({ person }) {
  const [isDescEdited, setDescEdited] = useState(false);
  const [desc, setDesc] = useState("I'm Yusuf");

  const decideContent = () => {
    if (isDescEdited === true) {
      return (
        <TextArea
          setDesc={setDesc}
          isDescEdited={isDescEdited}
          setDescEdited={setDescEdited}
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
    <div className="border-b-2">
      <h1 className="text-3xl py-1 font-medium">{person.name}</h1>
      <h2 className="py-1 mb-1">Profession</h2>
      {decideContent()}
    </div>
  );
}

export default Header;
