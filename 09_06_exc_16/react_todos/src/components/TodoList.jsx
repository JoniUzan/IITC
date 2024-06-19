//Libraries
import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  const { todos, removeTodo, setTodos } = props;

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
}
