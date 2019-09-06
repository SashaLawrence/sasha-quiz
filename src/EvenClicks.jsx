// Create a component <EvenClicks> that displays "Even" if it's been clicked an even number of times 
// and "Odd" if it's been clicked an odd number of times.

// dealing with state so need to turn the component into a class
// we have to import component from react
import React, { Component } from 'react';

class EvenClicks extends Component {

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
		//get current value of the click and assign it to current state
		let { clicks } = this.state;

		// set a new value, and passed in javascript with values we want to update,
		// adds 1 to clicks when onClick={this.handleClick} element is clicked
		this.setState({ clicks: clicks + 1})
	}

	// our class needs a render method - returns the JSX
	render() {

	{/*use the state - will use the initial state the first time*/ }

		let { clicks } = this.state;

		{/*a ternary: if the current number of clicks is modular by 2 it is even if not then its odd*/}
		
		return <p onClick={this.handleClick}>{ clicks % 2 === 0 ? "Even": "Odd"}</p>;
		}
			
	}


export default EvenClicks;