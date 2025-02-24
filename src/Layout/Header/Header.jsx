import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontFamily: '"Zen Tokyo Zoo", serif',
          fontSize: "2rem",
          color: "orange",
          letterSpacing: "2px",
        }}
      >
        ToDoList
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textTransform: "uppercase",
        }}
      >
        <NavLink to="tasks">Задачи</NavLink>
        <NavLink to="completedTasks">Выполненные задачи</NavLink>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="static" component="nav">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "orange" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: '"Zen Tokyo Zoo", serif',
              fontSize: "2rem",
              color: "orange",
              letterSpacing: "2px",
            }}
          >
            ToDoList
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              gap: "10px",
            }}
          >
            <NavLink to="tasks">Задачи</NavLink>
            <NavLink to="completedTasks">Выполненные задачи</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#006f74",
              color: "orange",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
