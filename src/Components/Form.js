import React, { Component } from "react";

import Basic from "./Basic";
import Secondary from "./Secondary";
import Optional from "./Optional";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1
    };
  }
  render(props) {
    const {
      title,
      description,
      keywords,
      allowRobots,
      contentType,
      lang,
      seo,
      author,
      image,
      url
    } = this.props;
    const { currentStep } = this.state;
    return (
      <div className="container box">
        <div className="block">
          <h3 className="is-size-4 has-text-weight-bold">Step {currentStep}</h3>
          <form onSubmit={this.props.handleSubmit}>
            <Basic
              currentStep={currentStep}
              handleChange={this.props.handleChange}
              title={title}
              description={description}
              keywords={keywords}
              image={image}
              url={url}
            />
            <Secondary
              currentStep={currentStep}
              handleChange={this.props.handleChange}
              allowRobots={allowRobots}
              contenType={contentType}
              lang={lang}
            />
            <Optional
              currentStep={currentStep}
              handleChange={this.props.handleChange}
              seo={seo}
              author={author}
              handleSubmit={this.props.handleSubmit}
            />

            {currentStep !== 1 && (
              <button
                className="button is-warning"
                type="button"
                onClick={() => {
                  const current = currentStep === 1 ? 1 : currentStep - 1;
                  this.setState({
                    currentStep: current
                  });
                }}
              >
                Previous
              </button>
            )}

            {currentStep < 3 && (
              <button
                className="button is-primary"
                type="button"
                onClick={() => {
                  const current = currentStep >= 2 ? 3 : currentStep + 1;
                  this.setState({
                    currentStep: current
                  });
                }}
              >
                Next
              </button>
            )}
            {currentStep === 3 && (
              <button className="button is-success" type="submit">
                Generate Meta Tags
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
