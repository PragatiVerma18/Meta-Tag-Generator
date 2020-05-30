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
      author: ""
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
    return (
      <div className="App">
        <Header />
        <Form
          show={this.state.show}
          currentStep={this.state.currentStep}
          title={this.state.title}
          description={this.state.description}
          keywords={this.state.keywords}
          allowRobots={this.state.allowRobots}
          contentType={this.state.contentType}
          lang={this.state.lang}
          seo={this.state.seo}
          author={this.state.author}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          previousButton={this.previousButton}
          nextButton={this.nextButton}
        />
        {this.state.show && <Modal handleClose={this.hideModal} />}
      </div>
    );
  }
}

export default App;
