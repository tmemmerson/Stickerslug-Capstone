import React from "react";
import ReusableSurvey from "./ReusableSurvey";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function SurveyUpdateForm(props) {
  const firestore = useFirestore();
  const { survey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    props.onEditSurvey();
    const propertiesToUpdate = {
      name: event.target.name.value,
      q1: event.target.q1.value,
      q1a1: event.target.q1a1.value,
      q1a2: event.target.q1a2.value,
      q1a3: event.target.q1a1.value,
      q2: event.target.q1.value,
      q2a1: event.target.q2a1.value,
      q2a2: event.target.q2a2.value,
      q2a3: event.target.q2a3.value,
      q3: event.target.q3.value,
      q3a1: event.target.q3a1.value,
      q3a2: event.target.q3a2.value,
      q3a3: event.target.q3a3.value,
    };
    return firestore.update(
      { collection: "responses", doc: survey.id },
      propertiesToUpdate
    );
  }

  return (
    <React.Fragment>
      <ReusableSurvey
        formSubmissionHandler={handleEditSurveyFormSubmission}
        buttonText="Update Survey"
      />
    </React.Fragment>
  );
}

SurveyUpdateForm.propTypes = {
  onEditSurvey: PropTypes.func,
};

export default SurveyUpdateForm;
