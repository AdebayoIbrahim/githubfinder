import React from "react";
import { Stack } from "@mui/material";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
function App() {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{
        height: "100vh",
      }}
    >
      <Navbar />
      <main>main-content</main>
      <Footer />
    </Stack>
  );
}

export default App;
