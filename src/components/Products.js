import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import firebaseDb from "../firebase";

const Products = () => {
  var [currentId, setCurrentId] = useState("");
  var [productObjects, setProductObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("sizeData").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setProductObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("sizeData").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`sizeData/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };
  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebaseDb.child(`sizeData/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };
};
