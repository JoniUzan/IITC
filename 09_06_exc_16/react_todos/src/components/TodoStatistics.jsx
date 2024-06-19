//Libraries
import * as React from "react";

//Mui
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  const { value } = props;
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export function TodoStatistics(props) {
  const { completedTodos, todosLength, activeTodos } = props;
  return (
    <div className="progress-container">
      <div>
        <CircularProgressWithLabel
          sx={{ minWidth: 90 }}
          value={(completedTodos / todosLength) * 100}
        />
      </div>

      <div className="statitics-container">
        <p>Total todos {todosLength}</p>
        <p>Complete Todos {completedTodos}</p>
        <p>Active Todos {activeTodos}</p>
      </div>
    </div>
  );
}
