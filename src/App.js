import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}

export default App;
