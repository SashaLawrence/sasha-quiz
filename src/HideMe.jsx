// Create a component <HideMe>Blah blah blah</HideMe> 
// that uses children to accept some content. 
// When the component is clicked the content should be hidden.


// dealing with state so need to turn the component into a class
// we have to import component from react
import React, { Component } from 'react';

class HideMe extends Component {

	//add a constructuor method
	//it get passed props as its first argument
	constructor(props) {
		// always add this
		super(props);

		// set up a state keeping track of clicks, initially not clicked
		this.state = {
			clicked: false,
		};

		// bind thing you have to add
		this.handleClick = this.handleClick.bind(this);

	}

	//put the event handler in a method
	//this keeps it seperate from our jsx
	handleClick() {
		//get current value of the shown and assign it to current state
		let { clicked } = this.state;

		// set a new value, and passed in javascript with values we want to update,
		// clicked value will become true once clicked
		this.setState({ clicked: true})
	}

	// our class needs a render method - returns the JSX
	render() {

	{/*use the state - will use the initial state the first time
	need to make children its prop*/ }

		let { clicked } = this.state;
		let { children } = this.props;
		
		{/*a ternary: if its clicked show null if not clicked show the children prop - defined in app */}
		return <p onClick={this.handleClick}>{clicked ? null : children  }</p>;
		}
	}


export default HideMe;