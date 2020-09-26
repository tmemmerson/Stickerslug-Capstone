import React from "react";
import PropTypes from "prop-types";

function Survey(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenSurveyClicked(props.id)}>
        <h3>{props.name}</h3>
      </div>
    </React.Fragment>
  );
}

Survey.propTypes = {
  name: PropTypes.string,
  whenSurveyClicked: PropTypes.func,
};

export default Survey;
