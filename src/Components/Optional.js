import React from "react";

function Optional(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <div className="field">
        <label className="label">
          Search engines should revisit this page after
        </label>
        <div className="control">
          <input
            className="input"
            name="seo"
            type="text"
            placeholder="e.g. 5 days"
            value={props.seo}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Author</label>
        <div className="control">
          <input
            className="input"
            name="author"
            type="text"
            placeholder="e.g. John doe"
            value={props.author}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default Optional;
