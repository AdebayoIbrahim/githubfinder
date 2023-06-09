import React from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import Notfound from "./Pages/Notfound";
import { GithubContextProvider } from "./Context/github/githubContext";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <GithubContextProvider>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          height: "100vh",
        }}
      >
        <Navbar />
        <Box pb={10} mt={3} pt={5} sx={{ margin: { xl: "auto" } }}>
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/user/:login" element={<User />}></Route>
              <Route path="*" element={<Notfound />}></Route>
            </Routes>
          </main>
        </Box>
        <Footer />
      </Stack>
    </GithubContextProvider>
  );
}

export default App;
