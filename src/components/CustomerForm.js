import React, { useState, useEffect } from "react";

const CustomerForm = (props) => {
  const initialFieldValues = {
    CustomerID: "",
    Name: "",
    Phone: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    Country: "",
    Orders: "",
    Total: "",
    Created: "",
    Email: "",
    LastOrder: "",
    Modified: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "") setValues({ ...initialFieldValues });
    else
      setValues({
        ...props.customerObjects[props.currentId],
      });
  }, [props.currentId, props.customerObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          name="Name"
          placeholder="Full Name"
          value={values.Name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>

          <input
            className="form-control"
            name="Phone"
            placeholder="Phone"
            value={values.Phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-globe"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="Country"
            placeholder="Country"
            value={values.Country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-flag-usa"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="State"
            placeholder="State"
            value={values.State}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-city"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="City"
            placeholder="City"
            value={values.City}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>

          <input
            className="form-control"
            name="LastOrder"
            placeholder="Order Date"
            value={values.LastOrder}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-globe"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="Total"
            placeholder="Total"
            value={values.Total}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6"></div>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default CustomerForm;
