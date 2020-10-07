import React, { useState, useEffect } from "react";

const ProductForm = (props) => {
  const initialFieldValues = {
    serial: "",
    baseName: "",
    isSht: "",
    isWin: "",
    isMug: "",
    isGym: "",
    isOne: "",
    isBag: "",
    isVnk: "",
    note: "",
    isCrw: "",
    isOversized: "",
    Rating: "",
    designOrientation: "",
    widthPixel: "",
    heightPixel: "",
    designAspectRatio: "",
    designAspectRatioOther: "",
    fiveInchWidth: "",
    fiveInchHeight: "",
    eightInchWidth: "",
    eightInchHeight: "",
    elevenSWidth: "",
    elevenSHeight: "",
    fiveInchSizeName: "",
    eightInchSizeName: "",
    elevenSSizeName: "",
    thumbWidthPx: "",
    thumbHeightPx: "",
    imgThmb:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    aspectRatio: "",
    imgSht:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgWin:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgMug:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgGym:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgOne:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgBag:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgVnk:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgCrw:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgGls:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgMat:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    imgCus:
      "https://coding-assets.s3-us-west-2.amazonaws.com/backgrounds/filler2.jpg",
    needsEdit: "false",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "") setValues({ ...initialFieldValues });
    else
      setValues({
        ...props.productObjects[props.currentId],
      });
  }, [props.currentId, props.productObjects]);

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
      <div className="form-row">
        <div className="form-group input-group col-md-9">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-signature"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="baseName"
            placeholder="title"
            value={values.baseName}
            onChange={handleInputChange}
          />
        </div>{" "}
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="needsEdit"
            placeholder="edit?"
            value={values.needsEdit}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-divide"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="aspectRatio"
            placeholder="aspect"
            value={values.aspectRatio}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-text-width"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="widthPixel"
            placeholder="width"
            value={values.widthPixel}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-text-height"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="heightPixel"
            placeholder="height"
            value={values.heightPixel}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-glass-whiskey"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isSht"
            placeholder="shot?"
            value={values.isSht}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-wine-glass-alt"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isWin"
            placeholder="wine?"
            value={values.isWin}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-beer"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isMug"
            placeholder="mug?"
            value={values.isMug}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        {" "}
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-tshirt"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isVnk"
            placeholder="v-neck?"
            value={values.isVnk}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-tshirt"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isCrw"
            placeholder="crew?"
            value={values.isCrw}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-ruler-combined"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isOversized"
            placeholder="xlg?"
            value={values.isOversized}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        {" "}
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-baby"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isOne"
            placeholder="onesie?"
            value={values.isOne}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-shopping-bag"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isBag"
            placeholder="tote?"
            value={values.isBag}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-dumbbell"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isGym"
            placeholder="gym?"
            value={values.isGym}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <input
          className="form-control"
          name="notes"
          placeholder=""
          value={values.notes}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId === "" ? "Saved" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
      <div className="row">
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgThmb}
              width={140}
              height={140}
              alt="thumbnail image"
            />
          </td>
        </div>
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgGls}
              width={140}
              height={140}
              alt="thumbnail image"
            />
          </td>
        </div>
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgCus}
              width={140}
              height={140}
              alt="thumbnail image"
            />
          </td>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgSht}
              width={140}
              height={141}
              alt="thumbnail image"
            />
          </td>
        </div>
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgOne}
              width={140}
              height={140}
              alt="thumbnail image"
            />
          </td>
        </div>
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgMug}
              width={140}
              height={140}
              alt="thumbnail image"
            />
          </td>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgVnk}
              width={140}
              height={140}
              alt="thumbnail image"
            />
          </td>
        </div>
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgCrw}
              width={140}
              height={140}
              alt="thumbnail image"
            />
          </td>
        </div>
        <div className="col-md-4">
          <td>
            {" "}
            <img
              src={values.imgBag}
              width={140}
              height={140}
              alt="thumbnail image"
            />
          </td>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
