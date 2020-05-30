import React from "react";

function Secondary(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <>
      <div className="control">
        <label className="label">Allow robots to index your website?</label>
        <div className="select">
          <select>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <div className="control">
        <label className="label">
          What type of content will your site display?
        </label>
        <div className="control">
          <input
            className="input"
            name="contentType"
            type="text"
            placeholder="e.g. UTF-8"
            value={props.contentType}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="control">
        <label className="label">What is your site primary language?</label>
        <div className="control">
          <input
            className="input"
            name="lang"
            type="text"
            placeholder="e.g. English"
            value={props.lang}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default Secondary;
