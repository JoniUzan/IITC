//Libraries
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//Mui
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Tooltip from "@mui/material/Tooltip";

export function TodoItem(props) {
  const { setTodos, todo, removeTodo } = props;
  const baseUrl = "http://localhost:8001/todos";

  function handleCheck() {
    let newTodo;
    setTodos((prevState) => {
      const newTodos = prevState.map((t) => {
        if (t.id === todo.id) {
          newTodo = { ...t, isComplete: !t.isComplete };
          return newTodo;
        }
        return t;
      });
      // console.log(newTodos);
      return newTodos;
    });
    axios.patch(`${baseUrl}/${todo.id}`, newTodo);
  }

  return (
    <li>
      <Checkbox
        type="checkbox"
        checked={todo.isComplete}
        onClick={handleCheck}
      />
      <label htmlFor="">{todo.title}</label>
      <Button component={Link} to={`/todos/${todo.id}`} sx={{ color: "blue" }}>
        info
      </Button>
      <Tooltip title="Delete">
        <Button
          className="remove-button"
          sx={{ color: "red" }}
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteForeverIcon />
        </Button>
      </Tooltip>
    </li>
  );
}
