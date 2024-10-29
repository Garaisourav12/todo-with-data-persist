function Todo({ todo, deleteTodo, completeTodo }) {
	return (
		<li>
			<span>{todo.text}</span>
			&nbsp;
			<span>{todo.completed ? "✅" : "❌"}</span>
			&nbsp;
			<button onClick={() => deleteTodo(todo.id)}>Remove</button>
			&nbsp;
			<button
				onClick={() => completeTodo(todo.id)}
				disabled={todo.completed}
			>
				Complete
			</button>
		</li>
	);
}

export default Todo;
