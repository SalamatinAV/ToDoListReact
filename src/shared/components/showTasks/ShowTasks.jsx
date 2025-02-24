import classes from "./ShowTasks.module.css";
import AddTaskIcon from "@mui/icons-material/AddTask";

const addTaskIconStyled = {
  color: "green",
  fontSize: "1.8rem",
  cursor: "pointer",
  transition: "0.5s",
  ":hover": { color: "#00e700" },
};

export default function ShowTasks({ task, date, onDelete }) {
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
        <AddTaskIcon sx={addTaskIconStyled} onClick={onDelete} />
      </div>
    </>
  );
}
