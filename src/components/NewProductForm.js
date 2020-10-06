import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { firestore } from "firebase";
import { withFirebase } from "./Firebase";

function NewProductForm() {
  let snapshot;

  async function onSubmitForm(event) {
    event.preventDefault();
    const sunValue = event.target.sun.value;
    const waterValue = event.target.water.value;
    const soilValue = event.target.soil.value;

    if (sunValue !== null) {
      snapshot = await firestore
        .collection("newProducts")
        .where("sun", "==", sunValue)
        .get();
      console.log(snapshot);
    } else if (waterValue !== null) {
      snapshot = await firestore
        .collection("newProducts")
        .where("water", "==", waterValue)
        .get();
    } else if (soilValue !== null) {
      snapshot = await firestore
        .collection("newProducts")
        .where("soil", "==", soilValue)
        .get();
    }
  }

  return (
    <Container>
      <h1>Product List</h1>
      <Form>
        <Form.Group onSubmit={onSubmitForm}>
          <Form.Label>Choose Sun</Form.Label>
          <Form.Control as="select">
            <option>sadasd</option>
            <option>Full-sun</option>
            <option>Part-sun</option>
            <option>Shade</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose Water</Form.Label>
          <Form.Control as="select">
            <option>asdasd</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose Soil</Form.Label>
          <Form.Control as="select">
            <option>asdasd</option>
            <option>Rock</option>
            <option>Loam</option>
            <option>Clay</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="success">
          Get Products
        </Button>
      </Form>
      {/* {display} */}
    </Container>
  );
}

export default withFirebase(NewProductForm);
