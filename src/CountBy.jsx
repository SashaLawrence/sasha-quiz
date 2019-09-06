// Create a component <CountBy step={ 5 }> that takes a step prop. 
// It should display a number (starting at 0) inside a <p>. Every time it is clicked the number should go up by step.

// dealing with state so need to turn the component into a class
// we have to import component from react
import React, { Component } from 'react';

class CountBy extends Component {

	//add a constructuor method
	//it get passed props as its first argument
	constructor(props) {
		// always add this
		super(props);

		// set up a state keeping track of clicks
		this.state = {
			clicks: 0,
		};

		// bind thing you have to add
		this.handleClick = this.handleClick.bind(this);

	}

	//put the event handler in a method
	//this keeps it seperate from our jsx
	handleClick() {
		//get current value of the step and assign it to current state
		let { clicks } = this.state;
		let { steps } = this.props;

		// set a new value, and passed in javascript with values we want to update,
		// adds 1 to clicks when onClick={this.handleClick} element is clicked
		this.setState({ clicks: clicks + steps})
	}

	// our class needs a render method - returns the JSX
	render() {

	{/*use the state - will use the initial state the first time*/ }

		let { clicks } = this.state;

		{/*when paragraph is clicked it runs the handle click method - which adds the number of the steps value defined in App*/}
		return <p onClick={this.handleClick}>{clicks }</p>;
		}
			
	}


export default CountBy;