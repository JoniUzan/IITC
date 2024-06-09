import { useState } from "react";

import "./index.css";

const initialTodos = [
  { id: "1", title: "Learn React", isComplete: false },
  { id: "2", title: "Build a Todo App", isComplete: false },
  { id: "3", title: "Read JavaScript Documentation", isComplete: true },
  { id: "4", title: "Write Unit Tests", isComplete: false },
  { id: "5", title: "Implement Context", isComplete: true },
  { id: "6", title: "Create Portfolio Website", isComplete: false },
  { id: "7", title: "Learn TypeScript", isComplete: false },
  { id: "8", title: "Refactor Codebase", isComplete: true },
  { id: "9", title: "Optimize Performance", isComplete: false },
  { id: "10", title: "Deploy to Production", isComplete: true },
];

function App() {
  //states
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  const activeTodos = todos.filter((todo) => !todo.isComplete).length;

  function makeId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function removeTodo(todoId) {
    const newTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodo);
  }

  function addTodo(ev) {
    ev.preventDefault();
    const newTodoObj = {
      id: makeId(10),
      title: newTodo,
      isComplete: false,
    };

    const newTodosList = [...todos];
    newTodosList.push(newTodoObj);

    setTodos(newTodosList);
    setNewTodo("");
  }

  function isComplete(todoId) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId && todo.isComplete) {
        return { ...todo, isComplete: false };
      } else if (todo.id === todoId && !todo.isComplete) {
        return { ...todo, isComplete: true };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <div>
        <h3>Add new todo</h3>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Titel"
            value={newTodo}
            onChange={(ev) => {
              setNewTodo(ev.target.value);
              console.log(newTodo);
            }}
          />
          <button>Add</button>
        </form>
      </div>

      <progress value={completedTodos / todos.length} />
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <label htmlFor="">{todo.title}</label>
                <input
                  type="checkbox"
                  defaultChecked={todo.isComplete}
                  onClick={() => isComplete(todo.id)}
                />
                <button onClick={() => removeTodo(todo.id)}>Remove todo</button>
              </li>
            );
          })}
        </ul>
      )}
      <p>Total todos {todos.length}</p>
      <p>Complete Todos {completedTodos}</p>
      <p>Active Todos {activeTodos}</p>
    </>
  );
}

export default App;
