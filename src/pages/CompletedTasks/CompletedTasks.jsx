import ShowTasks from "../../shared/components/showTasks/showTasks";
import { completedTasksStore } from "../../state/CompletedTasksStore";
import { observer } from "mobx-react-lite";
import DeleteIcon from "@mui/icons-material/Delete";
DeleteIcon.displayName = "DeleteIcon";

export default observer(function CompletedTasks(params) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "20px",
          bottom: "20px",
          width: "100%",
        }}
        className="bl-tasks"
      >
        {completedTasksStore.comletedTasks.map((t, idx) => (
          <ShowTasks
            key={idx}
            {...t}
            onDelete={() => {
              completedTasksStore.deleteComletedTask(t.task);
            }}
            IconComponents={DeleteIcon}
          />
        ))}
        {!completedTasksStore.comletedTasks.length && <h1>Список пуст!</h1>}
      </div>
    </>
  );
});
