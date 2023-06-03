import React from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Notfound from "./Pages/Notfound";

import { Routes, Route } from "react-router-dom";
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

      <Box ml="auto" mr="auto" pb={10} mt={3} pt={5}>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/*" element={<Notfound />}></Route>
          </Routes>
        </main>
      </Box>
      <Footer />
    </Stack>
  );
}

export default App;
