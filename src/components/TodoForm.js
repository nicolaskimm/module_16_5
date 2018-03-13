import React from 'react';

const TodoForm = props => {
	return (
		<form onSubmit={props.addTodo}> 
			<input 
				onChange={props.onChange}
				value={props.value}
			/>
			<button type='submit'> add </button>
		</form>
	)
}

export default TodoForm;