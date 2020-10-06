import React, { useState, useEffect } from "react";

const ProductForm = (props) => {
  const initialFieldValues = {
    serial: "",
    imgThmb: "",
    baseName: "",
    isSht: "",
    isWin: "",
    isMug: "",
    isGym: "",
    isOne: "",
    isBag: "",
    isVnk: "",
    isCrw: "",
    isOversized: "",
    Rating: "",
    designOrientation: "",
    widthPixel: "",
    heightPixel: "",
    aspectRatio: "",
    imgSht: "",
    imgWin: "",
    imgMug: "",
    imgGym: "",
    imgOne: "",
    imgBag: "",
    imgVnk: "",
    imgCrw: "",
    imgGls: "",
    imgMat: "",
    imgCus: "",
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
    var { item, value } = e.target;
    setValues({
      ...values,
      [item]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };
  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="form-group input-group col-md-10">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
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
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="needsEdit"
            placeholder="needsEdit"
            value={values.needsEdit}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="rating"
            placeholder="rating"
            value={values.rating}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="aspectRatio"
            placeholder="aspectRatio"
            value={values.aspectRatio}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="widthPixel"
            placeholder="widthPixel"
            value={values.widthPixel}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="heightPixel"
            placeholder="heightPixel"
            value={values.heightPixel}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isSht"
            placeholder="isSht"
            value={values.isSht}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isWin"
            placeholder="isWin"
            value={values.isWin}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isMug"
            placeholder="isMug"
            value={values.isMug}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isOne"
            placeholder="isOne"
            value={values.isOne}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isBag"
            placeholder="isBag"
            value={values.isBag}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isGym"
            placeholder="isGym"
            value={values.isGym}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        {" "}
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isVnk"
            placeholder="isVnk"
            value={values.isVnk}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isCrw"
            placeholder="isCrw"
            value={values.isCrw}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isOversied"
            placeholder="isOversied"
            value={values.isOversied}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="needsEdit"
            placeholder="needsEdit"
            value={values.needsEdit}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row"></div>

      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="heightPixel"
            placeholder="pixel height"
            value={values.heightPixel}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="designOrientation"
            placeholder="orientation"
            value={values.designOrientation}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="designAspectRatio"
            placeholder="portrait ratio"
            value={values.designAspectRatio}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="designAspectRatioOther"
            placeholder="landscape ratio"
            value={values.designAspectRatioOther}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="isOversized"
            placeholder="Oversized?"
            value={values.isOversized}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="fiveInchWidth"
            placeholder="5in width"
            value={values.fiveInchWidth}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="fiveInchHeight"
            placeholder="5in height"
            value={values.fiveInchHeight}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="eightInchWidth"
            placeholder="8in width"
            value={values.eightInchWidth}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="eightInchHeight"
            placeholder="8in height"
            value={values.eightInchHeight}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="elevenSWidth"
            placeholder="11s width"
            value={values.elevenSWidth}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="elevenSHeight"
            placeholder="11s height"
            value={values.elevenSHeight}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="fiveInchSizeName"
            placeholder="5in size name"
            value={values.fiveInchSizeName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="eightInchSizeName"
            placeholder="8in size name"
            value={values.eightInchSizeName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="elevenSSizeName"
            placeholder="11s size name"
            value={values.elevenSSizeName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="thumbWidthPx"
            placeholder="thmb px width"
            value={values.thumbWidthPx}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="thumbHeightPx"
            placeholder="thmb px height"
            value={values.thumbHeightPx}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="notes"
          placeholder="notes"
          value={values.notes}
          onChange={handleInputChange}
        />
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
export default ProductForm;
