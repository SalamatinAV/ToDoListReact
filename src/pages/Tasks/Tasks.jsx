import InputTask from "./components/InputTask";
import ShowTasks from "../../shared/components/showTasks/showTasks";
import classes from "./Tasks.module.css";

import { observer } from "mobx-react-lite";
import { TasksStore } from "../../state/TasksStore";
import { completedTasksStore } from "../../state/CompletedTasksStore";
import AddTaskIcon from "@mui/icons-material/AddTask";
AddTaskIcon.displayName = "AddTaskIcon";

export default observer(function Tasks() {
  return (
    <>
      <div className={classes.content}>
        <InputTask addTask={(e) => TasksStore.addTasks(e)} />
        <div className="bl-tasks">
          {TasksStore.tasks.map((t, idx) => (
            <ShowTasks
              key={idx}
              {...t}
              onDelete={() => {
                TasksStore.deleteTask(t.task);
                completedTasksStore.addCompletedTask(t);
              }}
              IconComponents={AddTaskIcon}
            />
          ))}
          {!TasksStore.tasks.length && (
            <>
              <h1>
                Список пуст! <br /> Добавьте задачу!
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
});
