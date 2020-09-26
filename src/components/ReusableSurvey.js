import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ReusableSurveyForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="What would you like your survey title to be?"
        />
        <br />
        <input type="text" name="q1" placeholder="Survey Question 1" />
        <br />
        <input type="text" name="q1a1" placeholder="Question 1 Value 1" />
        <br />
        <input type="text" name="q1a2" placeholder="Question 1 Value 2" />
        <br />
        <input type="text" name="q1a3" placeholder="Question 1 Value 3" />
        <br />
        <input type="text" name="q2" placeholder="Survey Question 2" />
        <br />
        <input type="text" name="q2a1" placeholder="Question 2 Value 1" />
        <br />
        <input type="text" name="q2a2" placeholder="Question 2 Value 2" />
        <br />
        <input type="text" name="q2a3" placeholder="Question 2 Value 3" />
        <br />
        <input type="text" name="q3" placeholder="Survey Question 3" />
        <br />
        <input type="text" name="q3a1" placeholder="Question 3 Value 1" />
        <br />
        <input type="text" name="q3a2" placeholder="Question 3 Value 2" />
        <br />
        <input type="text" name="q3a3" placeholder="Question 3 Value 3" />
        <br />
        <Button type="submit">{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}
ReusableSurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableSurveyForm;
