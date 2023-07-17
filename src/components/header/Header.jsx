import PropTypes from "prop-types";
import Description from "./Description";
import TextArea from "./TextArea";
import { useState } from "react";

Header.propTypes = {
  person: PropTypes.object.isRequired,
};

function Header({ person }) {
  const placeholder =
    "Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty through individualized service. Resourceful expert at learning customer needs, directing to desirable merchandise and upselling to meet sales quotas. Committed to strengthening customer experiences with positivity and professionalism when answering requests and processing sales.";
  const [isDescEdited, setDescEdited] = useState(false);
  const [desc, setDesc] = useState(placeholder);

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
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl py-1 font-medium">{person.name}</h1>
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
      {decideContent()}
    </div>
  );
}

export default Header;
