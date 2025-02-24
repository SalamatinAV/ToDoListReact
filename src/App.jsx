import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import AppRoutes from "./routing/AppRoutes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006064",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
