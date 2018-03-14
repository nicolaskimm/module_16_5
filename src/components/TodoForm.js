import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => {
	return (
		<div className={style.TodoForm}> 
			<p>Maybe another one?</p>
			<input
				onKeyUp={(e) => props.onKeyUp(e)}
				placeholder= "type your task and hit enter"
			/>
		</div>
	)
};

export default TodoForm;