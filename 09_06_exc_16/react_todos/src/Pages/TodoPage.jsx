//Libraries
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

//My components
import { TodoStatistics } from "../components/TodoStatistics";
import { TodoList } from "../components/TodoList";
import SimpleSnackbar from "../components/SimpleSnackbar";

//Mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default TodoPage;

function TodoPage() {
  //states
  const [todos, setTodos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    q: "",
    isComplete: false,
  });
  const locastion = useLocation();

  const isComplete = searchParams.get("isComplete") === "true";
  const q = searchParams.get("q" || "");

  const baseUrl = "http://localhost:8001/todos";

  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  const activeTodos = todos.filter((todo) => !todo.isComplete).length;

  let todoData;

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(function (response) {
        todoData = response.data;
        setTodos(todoData);
      })
      .catch(function (error) {
        console.log("error fetching");
      });

    console.log("useEffect render");
  }, [locastion.pathname]);

  const filteredArray = todos.filter((todo) => {
    if (q !== null) return todo.title.toLowerCase().includes(q.toLowerCase());
  });

  async function removeTodo(todoId) {
    console.log(todoId);
    await axios.delete(`${baseUrl}/${todoId}`);

    const newTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodo);
    console.log(newTodo);
    <SimpleSnackbar />;
  }

  return (
    <>
      <main>
        <TodoStatistics
          todosLength={todos.length}
          completedTodos={completedTodos}
          activeTodos={activeTodos}
        />
        <Button
          component={Link}
          to={"/todos/createTodo"}
          sx={{ color: "blue" }}
        >
          creat new todo
        </Button>

        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={q}
          onChange={(ev) => {
            setSearchParams((prev) => {
              prev.set("q", ev.target.value);
              return prev;
            });
          }}
        />
        {/* 
        <InputLabel>All</InputLabel>
        <Select>
          <MenuItem value={isComplete}>Completed</MenuItem>
          <MenuItem value={isComplete}>Not completed</MenuItem>
        </Select> */}

        {todos.length === 0 ? (
          <p>No todos available</p>
        ) : (
          <TodoList
            setTodos={setTodos}
            todos={filteredArray}
            removeTodo={removeTodo}
          />
        )}
      </main>
      <Outlet />
    </>
  );
}
