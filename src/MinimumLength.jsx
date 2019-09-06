// Create a component <MinimumLength length={ 30 }> that contains an <input>. 
// The user should see a warning, "Too short!", unless they have entered at least length characters.

// dealing with state so need to turn the component into a class
// we have to import component from react
import React, { Component } from 'react';

class MinimumLength extends Component {

	//add a constructuor method
	//it get passed props as its first argument
	constructor(props) {
		// always add this
		super(props);

		// set up a state keeping track of clicks
		this.state = {
			value:"",
		};

		// bind thing you have to add
		this.handleChange = this.handleChange.bind(this);

	}

	//add e to the event handler (+ e.currentTarget), we add this to the DOM element to update the state when the form value changes
	handleChange(e) {

		// set a new value, and passed in javascript with values we want to update,
		this.setState({ value: e.currentTarget.value})
	}

	// our class needs a render method - returns the JSX
	render() {

	{/*use the state - will use the initial state of the length and value the first time*/ }
		let { value } = this.state;
		let { length } = this.props;

		{/*a ternary operation: if the input length is less than the length prop (defined in App) than show the message too short*/}
		return (
			<div className="form-group">
				<input 
					className="form-control"
					onChange={this.handleChange}
					value ={value}
				/>
				{ value.length < length ? <p className="text-danger">Too short!</p> : <p className="text-success">Okay</p> }
			</div>
		);
	}	
}


export default MinimumLength;