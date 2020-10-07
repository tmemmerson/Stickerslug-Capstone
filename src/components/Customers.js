import React, { useState, useEffect } from "react";
import CustomerForm from "./CustomerForm";
import firebaseDb from "../firebase";
import NavBar from "../layouts/DashboardLayout/NavBar";

const Customers = () => {
  var [currentId, setCurrentId] = useState("");
  var [customerObjects, setProductObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("temp02").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setProductObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("temp02").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`temp02/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };
  const onDelete = (id) => {
    if (window.confirm("Are you sure about deleting this customer?")) {
      firebaseDb.child(`temp02/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Customer Manager</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <NavBar />
        </div>
        <div className="col-md-4">
          <CustomerForm
            {...{ currentId, customerObjects, addOrEdit }}
          ></CustomerForm>
        </div>
        <div className="col-md-6">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Customer ID</th>
                <th>Order Total</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Zip</th>
                <th>Last Order Date</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(customerObjects).map((key) => (
                <tr key={key}>
                  <td>{customerObjects[key].CustomerID}</td>
                  <td>${customerObjects[key].Total}</td>
                  <td>{customerObjects[key].Name}</td>
                  <td>{customerObjects[key].Phone}</td>
                  <td>{customerObjects[key].Country}</td>
                  <td>{customerObjects[key].State}</td>
                  <td>{customerObjects[key].City}</td>
                  <td>{customerObjects[key].Zip}</td>
                  <td>{customerObjects[key].LastOrder}</td>

                  <td className="bg-light">
                    <a
                      className="btn text-primary"
                      onClick={() => {
                        setCurrentId(key);
                      }}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a
                      className="btn text-danger"
                      onClick={() => {
                        onDelete(key);
                      }}
                    >
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customers;
