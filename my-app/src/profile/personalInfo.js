import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
const PersonalInfo = () => {
  return (
    <Grid container fluid style={{ padding: "50px" }}>
      <Grid container item xs={3} spacing={1}>
        <p>
          <img
            src="https://res.cloudinary.com/thetripguru/image/upload/v1594382291/icons/person_1.svg"
            style={{ height: "300px", weight: "300px" }}
            alt="avatar"
          />
        </p>
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
      </Grid>
      <Grid container item xs={9} spacing={1} justify="center">
        Work Experiences
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
