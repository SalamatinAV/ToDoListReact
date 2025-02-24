import { makeAutoObservable } from "mobx";

function createTasksStore() {
  return makeAutoObservable({
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],

    addTasks(task) {
      if (this.tasks.some((t) => t.task.toLowerCase() === task.toLowerCase())) {
        return;
      }

      const newTask = {
        task,
        date: new Date().toLocaleString(),
        isShow: true,
      };

      this.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.task !== task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  });
}
export const TasksStore = createTasksStore();
