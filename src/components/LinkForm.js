import React from "react";
import "../linkForm.css";

export let LinkForm = ({ onInputChange, onButtonClick }) => {
  return (
    <div>
      <p className="f3 white">Submit an image link to detect faces!</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 center w-70"
            placeholder="Image link here"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
