import React from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

export function backToTodos(navigate) {
  navigate(-1);
}

function TodoDetails(props) {
  const { todo, todoIdUrl } = props;
  const navigate = useNavigate();

  async function removeTodo() {
    console.log();
    try {
      await axios.delete(todoIdUrl);
      console.log("delete comeplete");
      backToTodos(navigate);
    } catch (error) {
      console.error("unable to delete");
    }
  }

  return (
    <>
      <h4>{todo.title}</h4>
      <div>
        <h4 style={{ display: "inline-block" }}>description : </h4>
        {todo.description}
      </div>
      <Tooltip title="Delete">
        <Button
          className="remove-button"
          sx={{ color: "red" }}
          onClick={() => removeTodo()}
        >
          <DeleteForeverIcon />
        </Button>
      </Tooltip>
      <Button onClick={() => backToTodos(navigate)}>Back to Todos</Button>
    </>
  );
}

export default TodoDetails;
