import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function SurveyDetail(props) {
  const { survey } = props;
  const firestore = useFirestore();

  function addResponseToFirestore(event) {
    event.preventDefault();

    props.onNewResponseCreation();

    return firestore.collection("responses").add({
      response1: event.target.response1.value,
      response2: event.target.response2.value,
      response3: event.target.response3.value,
    });
  }
  return (
    <React.Fragment>
      <h1>{survey.name}</h1>
      <form onSubmit={addResponseToFirestore}>
        <label>
          {survey.q1}
          <select name="response1">
            <option>{survey.q1a1}</option>
            <option>{survey.q1a2}</option>
            <option>{survey.q1a3}</option>
          </select>
        </label>
        <br />
        <label>
          {survey.q2}
          <select name="response2">
            <option>{survey.q2a1}</option>
            <option>{survey.q2a2}</option>
            <option>{survey.q2a3}</option>
          </select>
        </label>
        <br />
        <label>
          {survey.q3}
          <select name="response3">
            <option>{survey.q3a1}</option>
            <option>{survey.q3a2}</option>
            <option>{survey.q3a3}</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit survey!</button>
      </form>
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  onNewResponseCreation: PropTypes.func,
  survey: PropTypes.object,
};

export default SurveyDetail;
