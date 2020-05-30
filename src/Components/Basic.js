import React from "react";

function Basic(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <>
      <div className="field">
        <div className="control">
          <label htmlFor="title" className="label">
            Site Title
          </label>
          <input
            className="input"
            name="title"
            type="text"
            placeholder="Title must be within 70 characters"
            value={props.title}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label htmlFor="description" className="label">
            Site Description
          </label>
          <textarea
            className="textarea"
            name="description"
            type="text"
            placeholder="Description must be within 150 characters"
            value={props.description}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label htmlFor="Image" className="label">
            Site Main Image Url
          </label>
          <input
            className="input"
            name="image"
            type="text"
            placeholder="Paste the main image URL"
            value={props.image}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label htmlFor="URL" className="label">
            Site Url
          </label>
          <input
            className="input"
            name="url"
            type="text"
            placeholder="Paste the website URL"
            value={props.url}
            onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label htmlFor="keywords" className="label">
            Site Keywords (Separated with commas)
          </label>
          <textarea
            className="textarea"
            name="keywords"
            type="text"
            placeholder="keyword1, keyword2, keyword3"
            value={props.keywords}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default Basic;
