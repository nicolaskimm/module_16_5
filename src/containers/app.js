import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data:
				[{
					id: 1,
					text: 'clean room'
				}, {
					id: 2,
					text: 'wash dishes'
				}, {
					id: 3,
					text: 'feed my cat'
				}]
		};
	}

	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4()
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	onKeyUp(e) {
		if (e.keyCode === 13) {
			this.addTodo(e.target.value);
			e.target.value = '';
		}
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title amount={this.state.data.length} />
				<TodoForm onKeyUp={this.onKeyUp.bind(this)} />
				<TodoList tasks={this.state.data} remove={this.removeTodo.bind(this)} />
			</div>
		);
	}
}

export default App;