import React from 'react';
import style from './TodoList.css';


const TodoList = props => {
	const list = props.tasks.map(task => {
		return (
			<li key={task.id}>
				<p>{task.text}</p>
				<button onClick={() => props.remove(task.id)}> x </button>
			</li>
		)
	});

	return <ul className={style.TodoList}>{list}</ul>
}


export default TodoList;