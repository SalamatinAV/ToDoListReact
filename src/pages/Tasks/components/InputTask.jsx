import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ListIcon from "@mui/icons-material/List";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: "rgb(86 191 188)",
  },

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "42ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
}));

export default function InputTask({ addTask }) {
  const [task, setTask] = useState("");

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Toolbar>
          <Search tabIndex={0} sx={{ backgroundColor: "#53c7c3" }}>
            <SearchIconWrapper>
              <ListIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Добавить задачу"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={(e) => {
                if (task.trim() && e.key == "Enter") {
                  addTask(task);
                  setTask("");
                }
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      if (task.trim()) {
                        addTask(task);
                        setTask("");
                      }
                    }}
                    sx={{
                      cursor: !task ? "not-allowed" : null,
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: task.trim() ? "green" : "red",
                        fontSize: "1.5rem",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Search>
        </Toolbar>
      </Box>
    </>
  );
}
