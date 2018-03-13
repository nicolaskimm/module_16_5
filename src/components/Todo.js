import React from 'react';

const Todo = props => {
	return (
		<li key={task.id}>
			<p>{task.text}</p>
			<button onClick={() => props.remove(task.id)}> x </button>
		</li>
	)
}

