//props.todos = todos --- from App.jsx

//props.isComplete = isComplete --- from App.jsx

//props.removeTodo = removeTodo --- from App.jsx

import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={props.removeTodo}
            setTodos={props.setTodos}
          />
        );
      })}
    </ul>
  );
}
