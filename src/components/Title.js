import React from 'react';

const Title = props => {
	return (
		<div>
			<h1>Your ToDo App</h1>
			<p>Number of tasks: {props.amount}</p>
		</div>
	)
}


export default Title;