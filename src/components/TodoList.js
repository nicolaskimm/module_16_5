import React from 'react';
import style from './TodoList.css';


const TodoList = props => {
	const list = props.tasks.map(task => {
		return (
			<li key={task.id}>
				<button onClick={() => props.remove(task.id)}> x </button>
				<p>{task.text}</p>
			</li>
		)
	});

	return <ul className={style.TodoList}>{list}</ul>
}


export default TodoList;