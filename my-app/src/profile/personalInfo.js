import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonalInfo = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/thetripguru/image/upload/v1594382291/icons/person_1.svg"
        style={{ height: "300px", weight: "300px" }}
      />
      <p>Abhina Sathyan</p>
      <p>Full stack developer</p>
      <p>Bangalore, India</p>
      <p>
        <FontAwesomeIcon icon="check-square" />
        abhinasathyan1@gmail.com
      </p>
      <p>
        <FontAwesomeIcon icon="phone" />
        917204132715
      </p>
    </div>
  );
};

export default PersonalInfo;
