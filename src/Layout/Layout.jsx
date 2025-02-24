import Header from "./Header/Header";
import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";
export default function Layout(params) {
  return (
    <>
      <div className={classes.layout}>
        <Header />
        <main className={classes.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
