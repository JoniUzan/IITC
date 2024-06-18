//props.addTodo = addTodo() --- from App

//props.setNewTodo = setNewTodo() --- from App

//props.newTodo = newTodo --- from setNewTodo() on  App
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Add } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export function AddTodo(props) {
  const {
    addTodo,
    newTodo,
    setNewTodo,
    descriptionValue,
    navigate,
    backToTodos,
  } = props;
  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="add-todo-container">
            <form onSubmit={addTodo}>
              <div className="form-container">
                <TextField
                  sx={{
                    width: "100%",
                  }}
                  id="filled-basic"
                  label="Add todo"
                  variant="outlined"
                  value={newTodo}
                  onChange={(ev) => {
                    setNewTodo(ev.target.value);
                  }}
                />
                <Tooltip title="Add">
                  <Button type="submit">
                    <Add />
                  </Button>
                </Tooltip>
              </div>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="Description"
                ref={descriptionValue}
              />
            </form>
            <Button onClick={() => backToTodos(navigate)}>Back to Todos</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
