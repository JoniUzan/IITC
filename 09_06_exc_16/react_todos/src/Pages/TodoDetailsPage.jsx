//Libraries
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";

//My components
import TodoDetails from "../components/TodoDetails";

//Mui
import Card from "@mui/material/Card";

function TodoDetailsPage() {
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  const todoIdUrl = `http://localhost:8001/todos/${id}`;
  useEffect(() => {
    axios
      .get(todoIdUrl)
      .then(function (response) {
        setTodo(response.data);
      })
      .catch(function (error) {
        console.log("error fetching");
      });

    console.log("useEffect render");
  }, [id]);

  console.log(id);
  console.log(todo);

  return (
    <>
      <Card variant="outlined">
        {<TodoDetails todo={todo} todoIdUrl={todoIdUrl} />}
      </Card>
    </>
  );
}

export default TodoDetailsPage;
