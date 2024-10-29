import { useState } from "react";
import Todo from "./components/Todo";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
	const [todos, setTodos] = useLocalStorage("todos", []);
	const [text, setText] = useState("");

	// add todo
	const addTodo = () => {
		if (!text.trim()) return;
		const newTodo = {
			id: (todos[todos.length - 1]?.id || 0) + 1,
			text: text,
			completed: false,
		};
		setTodos([...todos, newTodo]);
		setText("");
	};

	// delete todo
	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// complete todo
	const completeTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: true } : todo
			)
		);
	};

	return (
		<div>
			<h1>Todo List</h1>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={addTodo}>Add todo</button>
			<ul>
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						completeTodo={completeTodo}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
