import { makeAutoObservable } from "mobx";

function createComletedTasks() {
  return makeAutoObservable({
    comletedTasks: JSON.parse(localStorage.getItem("comletedTasks")) || [],

    addCompletedTask(tasks) {
      const newTask = { ...tasks, date: new Date().toLocaleString() };
      this.comletedTasks.push(newTask);
      localStorage.setItem("comletedTasks", JSON.stringify(this.comletedTasks));
    },

    deleteComletedTask(task) {
      this.comletedTasks = this.comletedTasks.filter((cT) => cT.task !== task);
      localStorage.setItem("comletedTasks", JSON.stringify(this.comletedTasks));
    },
  });
}
export const completedTasksStore = createComletedTasks();
