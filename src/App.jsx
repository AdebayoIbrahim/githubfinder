import React from "react";
import { Stack } from "@mui/material";
import Navbar from "./Components/layout/Navbar";
function App() {
  return (
    <div className="App">
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          height: "100vh",
        }}
      >
        <Navbar />
      </Stack>
    </div>
  );
}

export default App;
