import React, { Component } from "react";

import "./App.css";

import Header from "./Components/Header";
import Form from "./Components/Form";
import Modal from "./Components/Modal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: "",
      description: "",
      keywords: "",
      allowRobots: "",
      contentType: "",
      lang: "",
      seo: "",
      author: "",
      image: "",
      url: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      show: true
    });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    const {
      show,
      currentStep,
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
    } = this.state;
    return (
      <div className="App">
        <Header />
        <Form
          show={show}
          currentStep={currentStep}
          title={title}
          description={description}
          keywords={keywords}
          allowRobots={allowRobots}
          contentType={contentType}
          lang={lang}
          seo={seo}
          author={author}
          image={image}
          url={url}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          previousButton={this.previousButton}
          nextButton={this.nextButton}
        />
        {this.state.show && (
          <Modal
            handleClose={this.hideModal}
            title={title}
            description={description}
            keywords={keywords}
            allowRobots={allowRobots}
            contentType={contentType}
            lang={lang}
            seo={seo}
            author={author}
            image={image}
            url={url}
          />
        )}
      </div>
    );
  }
}

export default App;
