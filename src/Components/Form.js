import React, { Component } from 'react';
import Basic from './Basic';
import Secondary from './Secondary';
import Optional from './Optional';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentStep: 1,
			title: '',
			description: '',
			keywords: '',
			allowRobots: '',
			contenType: '',
			lang: '',
			seo: '',
			author: '',
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// const { email, username, password } = this.state;
		alert('Your registration detail');
	};

	_next = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		this.setState({
			currentStep: currentStep,
		});
	};

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({
			currentStep: currentStep,
		});
	};

	previousButton() {
		let currentStep = this.state.currentStep;
		if (currentStep !== 1) {
			return (
				<button
					className='button is-warning'
					type='button'
					onClick={this._prev}>
					Previous
				</button>
			);
		}
		return null;
	}

	nextButton() {
		let currentStep = this.state.currentStep;
		if (currentStep < 3) {
			return (
				<button
					className='button is-primary'
					type='button'
					onClick={this._next}>
					Next
				</button>
			);
		}
		return null;
	}

	render() {
		return (
			<div className='container'>
				<div className='block'>
					<h3 className='is-size-4 has-text-weight-bold'>
						Step {this.state.currentStep}
					</h3>
					<form onSubmit={this.handleSubmit}>
						<Basic
							currentStep={this.state.currentStep}
							handleChange={this.handleChange}
							title={this.state.title}
							description={this.state.description}
							keywords={this.state.keywords}
						/>
						<Secondary
							currentStep={this.state.currentStep}
							handleChange={this.handleChange}
							allowRobots={this.state.allowRobots}
							contenType={this.state.contenType}
							lang={this.state.lang}
						/>
						<Optional
							currentStep={this.state.currentStep}
							handleChange={this.handleChange}
							seo={this.state.seo}
							author={this.state.author}
						/>
						{this.previousButton()}
						{this.nextButton()}
					</form>
				</div>
			</div>
		);
	}
}

export default Form;
