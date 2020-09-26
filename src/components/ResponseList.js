import React from "react";
import Response from "./Response";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

function ResponseList() {
  useFirestoreConnect([{ collection: "responses" }]);

  const responses = useSelector((state) => state.firestore.ordered.responses);

  if (isLoaded(responses)) {
    return (
      <React.Fragment>
        <hr />
        {responses.map((response) => {
          return (
            <Response
              id={response.id}
              response1={response.response1}
              response2={response.response2}
              response3={response.response3}
            />
          );
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

export default ResponseList;
