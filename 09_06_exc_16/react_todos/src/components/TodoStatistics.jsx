//props.todosLength = todo.length --- from App

//props.completedTodos = completedTodos --- from App

//props.activeTodos = activeTodos --- from App
import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { colors } from "@mui/material";
import { WidthFull } from "@mui/icons-material";

function CircularProgressWithLabel(props) {
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
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export function TodoStatistics(props) {
  return (
    <div className="progress-container">
      <div>
        <CircularProgressWithLabel
          sx={{ minWidth: 90 }}
          value={(props.completedTodos / props.todosLength) * 100}
        />
      </div>

      <div className="statitics-container">
        <p>Total todos {props.todosLength}</p>
        <p>Complete Todos {props.completedTodos}</p>
        <p>Active Todos {props.activeTodos}</p>
      </div>
    </div>
  );
}
