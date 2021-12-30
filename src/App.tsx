import React from "react";
import Routers from "./routers";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b1929",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.7)",
    },
    primary: {
      light: "#093170",
      main: "#0d47a1",
      dark: "#3d6bb3",
      contrastText: "#fff",
    },
    secondary: {
      light: "#093170",
      main: "#093170",
      dark: "#093170",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;