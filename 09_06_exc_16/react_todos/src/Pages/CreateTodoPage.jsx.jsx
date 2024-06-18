import React, { useRef, useState } from "react";
import axios from "axios";
import { AddTodo } from "../components/AddTodo";
import { backToTodos } from "../components/TodoDetails";
import { useNavigate } from "react-router-dom";

export default CreateTodoPage;

function CreateTodoPage() {
  const descriptionValue = useRef();
  const [newTodo, setNewTodo] = useState("");
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8001/todos";

  function addTodo(ev) {
    ev.preventDefault();
    console.log(descriptionValue.current.value);
    const newTodoObj = {
      title: newTodo,
      description: descriptionValue.current.value,
      isComplete: false,
    };
    axios
      .post(baseUrl, {
        ...newTodoObj,
      })
      .then(function (response) {
        console.log(response.data);

        backToTodos(navigate);
      })
      .catch(function (error) {
        console.log("error update the data");
      });

    setNewTodo("");
    descriptionValue.current.value = "";
  }

  return (
    <div>
      <AddTodo
        descriptionValue={descriptionValue}
        addTodo={addTodo}
        setNewTodo={setNewTodo}
        newTodo={newTodo}
        backToTodos={backToTodos}
        navigate={navigate}
      />
    </div>
  );
}
