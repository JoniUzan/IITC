import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

import { Route, Routes } from "react-router-dom";

import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";

import HomePage from "./Pages/HomePage";
import TodoPage from "./Pages/TodoPage";
import CreateTodoPage from "./Pages/CreateTodoPage.jsx";
import TodoDetailsPage from "./Pages/TodoDetailsPage";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import SideBarPage from "./Pages/SideBarPage.jsx";

function App() {
  return (
    <>
      <div>
        <ResponsiveAppBar />
      </div>

      <Routes>
        <Route path="home" element={<HomePage />} />

        <Route path="/todos" element={<SideBarPage />}>
          <Route index element={<TodoPage />} />

          <Route path="createTodo" element={<TodoPage />}>
            <Route index element={<CreateTodoPage />} />
          </Route>

          <Route path=":id" element={<TodoDetailsPage />} />
        </Route>

        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </>
  );

  //states
  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState("");
  // const baseUrl = "http://localhost:8001/todo";

  // let todoData;

  // useEffect(() => {
  //   axios
  //     .get(baseUrl)
  //     .then(function (response) {
  //       todoData = response.data;
  //       setTodos(todoData);
  //     })
  //     .catch(function (error) {
  //       console.log("error fetching");
  //     });

  //   // console.log("Hello");
  // }, []);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  // const completedTodos = todos.filter((todo) => todo.isComplete).length;
  // const activeTodos = todos.filter((todo) => !todo.isComplete).length;

  // async function removeTodo(todoId) {
  //   console.log(todoId);
  //   axios.delete(`${baseUrl}/${todoId}`);

  //   const newTodo = todos.filter((todo) => todo.id !== todoId);
  //   setTodos(newTodo);
  //   console.log(newTodo);
  // }

  // function addTodo(ev) {
  //   ev.preventDefault();
  //   const newTodoObj = {
  //     id: makeId(10),
  //     title: newTodo,
  //     isComplete: false,
  //   };
  //   axios
  //     .post(baseUrl, {
  //       ...newTodoObj,
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("error update the data");
  //     });

  //   const newTodosList = [...todos];
  //   newTodosList.push(newTodoObj);

  //   setTodos(newTodosList);
  //   setNewTodo("");
  // }

  // function isComplete(todoId, status) {
  //   console.log("function trigerred");
  //   let newTodo;
  //   const newTodos = todos.map((todo) => {
  //     if (todo.id === todoId) {
  //       newTodo = { ...todo, isComplete: status };
  //       return newTodo;
  //     }
  //     return todo;
  //   });

  //   setTodos(newTodos);
  //   axios.patch(`${baseUrl}/${todoId}`, newTodo);
  // }

  // return (
  //   <>
  //     <main>
  //       <AddTodo addTodo={addTodo} setNewTodo={setNewTodo} newTodo={newTodo} />

  //       <TodoStatistics
  //         todosLength={todos.length}
  //         completedTodos={completedTodos}
  //         activeTodos={activeTodos}
  //       />
  //       {todos.length === 0 ? (
  //         <p>No todos available</p>
  //       ) : (
  //         <TodoList
  //           setTodos={setTodos}
  //           todos={todos}
  //           isComplete={isComplete}
  //           removeTodo={removeTodo}
  //         />
  //       )}
  //     </main>
  //   </>
  // );
}

export default App;
