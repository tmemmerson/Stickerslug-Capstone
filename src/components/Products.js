import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import firebaseDb from "../firebase";
import NavBar from "../layouts/DashboardLayout/NavBar";

const Products = () => {
  var [currentId, setCurrentId] = useState("");
  var [productObjects, setProductObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("temp01").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setProductObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("temp01").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`temp01/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };
  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebaseDb.child(`temp01/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Product Manager</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <NavBar />
        </div>
        <div className="col-md-4">
          <ProductForm
            {...{ currentId, productObjects, addOrEdit }}
          ></ProductForm>
        </div>
        <div className="col-md-6">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Aspect</th>
                <th>Orientation</th>
                <th>Oversized</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(productObjects).map((key) => (
                <tr key={key}>
                  <td>{productObjects[key].serial}</td>
                  <td>{productObjects[key].baseName}</td>
                  <td>{productObjects[key].Rating}</td>
                  <td>{productObjects[key].aspectRatio}</td>
                  <td>{productObjects[key].designOrientation}</td>
                  <td>{productObjects[key].isWin}</td>
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

export default Products;
