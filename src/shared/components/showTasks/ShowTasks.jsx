import { colors } from "@mui/material";
import classes from "./ShowTasks.module.css";

const iconStyles = {
  AddTaskIcon: {
    color: "green",
    ":hover": { color: "#00e700" },
  },
  DeleteIcon: {
    color: "#ab0000",
    ":hover": { color: "#ff0202" },
  },
};

function getIconStyle(component) {
  return iconStyles[component.displayName] || {};
}

export default function ShowTasks({ task, date, onDelete, IconComponents }) {
  const idxDate = date.split(",");

  return (
    <>
      <div className={classes.blTask}>
        <span className={classes.date}>
          {idxDate[0]}
          <br />
          {idxDate[1]}
        </span>
        <span className={classes.task}>{task}</span>

        <IconComponents
          sx={{
            cursor: "pointer",
            transition: "0.5s",
            fontSize: "1.6rem",
            color: "green",
            ...getIconStyle(IconComponents),
          }}
          onClick={onDelete}
        />
      </div>
    </>
  );
}
