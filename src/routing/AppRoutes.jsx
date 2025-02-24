import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Tasks from "../pages/Tasks/Tasks";
import CompletedTasks from "../pages/CompletedTasks/CompletedTasks";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="tasks" replace />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="completedTasks" element={<CompletedTasks />} />
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
}
