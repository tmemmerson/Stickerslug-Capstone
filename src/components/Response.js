import React from "react";
import PropTypes from "prop-types";

function Response(props) {
  return (
    <React.Fragment>
      <h3>Response #{props.id}</h3>
      <p>{props.response1}</p>
      <p>{props.response2}</p>
      <p>{props.response3}</p>
    </React.Fragment>
  );
}

Response.propTypes = {
  id: PropTypes.string,
  response1: PropTypes.string,
  response2: PropTypes.string,
  response3: PropTypes.string,
};

export default Response;
