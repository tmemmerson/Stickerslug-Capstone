import React from "react";
import AddSurveyForm from "./NewSurveyForm";
import SurveyList from "./SurveyList";
import SurveyDetail from "./SurveyDetail";
import SurveyEdit from "./SurveyUpdate";
import ResponseComplete from "./ResponseComplete";
import { connect } from "react-redux";
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";

class SurveyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null,
      editing: false,
      responseComplete: false,
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(
      () => this.updateTicketElapsedWaitTime(),
      6000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime = () => {
    const { dispatch } = this.props;
  };

  handleClick = () => {
    if (this.state.selectedSurvey != null) {
      this.setState({
        selectedSurvey: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingNewSurveyToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  };

  handleAddingNewResponseToList = () => {
    this.setState({
      selectedSurvey: null,
      responseComplete: true,
    });
  };

  handleChangingSelectedSurvey = (id) => {
    this.props.firestore
      .get({ collection: "surveys", doc: id })
      .then((survey) => {
        const firestoreSurvey = {
          name: survey.get("name"),
          q1: survey.get("q1"),
          q1a1: survey.get("q1a1"),
          q1a2: survey.get("q1a2"),
          q1a3: survey.get("q1a3"),
          q2: survey.get("q2"),
          q2a1: survey.get("q2a1"),
          q2a2: survey.get("q2a2"),
          q2a3: survey.get("q2a3"),
          q3: survey.get("q3"),
          q3a1: survey.get("q3a1"),
          q3a2: survey.get("q3a2"),
          q3a3: survey.get("q3a3"),
          id: survey.id,
        };
        this.setState({ selectedSurvey: firestoreSurvey });
      });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingSurveyInList = () => {
    this.setState({
      editing: false,
      selectedSurvey: null,
    });
  };

  handleDeletingSurvey = (id) => {
    this.props.firestore.delete({ collection: "surveys", doc: id });
    this.setState({ selectedSurvey: null });
  };

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the surveys.</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = (
          <SurveyEdit
            survey={this.state.selectedSurvey}
            onEditSurvey={this.handleEditingSurveyInList}
          />
        );
        buttonText = "Return to Survey List";
      } else if (this.state.selectedSurvey != null) {
        currentlyVisibleState = (
          <SurveyDetail
            survey={this.state.selectedSurvey}
            onClickingDelete={this.handleDeletingSurvey}
            onClickingEdit={this.handleEditClick}
            onNewResponseCreation={this.handleAddingNewResponseToList}
          />
        );
        buttonText = "Return to Survey List";
      } else if (this.state.responseComplete === true) {
        currentlyVisibleState = <ResponseComplete />;
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = (
          <AddSurveyForm
            onNewSurveyCreation={this.handleAddingNewSurveyToList}
          />
        );
        buttonText = "Return to Survey List";
      } else {
        currentlyVisibleState = (
          <SurveyList onSurveySelection={this.handleChangingSelectedSurvey} />
        );
        buttonText = "Add Survey";
      }

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default withFirestore(SurveyControl);
