import React from "react";
// import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import UserResults from "../Components/Users/userResults";
function Home() {
  return (
    <>
      {/* {search component} */}
      <Helmet>
        <title>Github Finder</title>
      </Helmet>
      <UserResults />
    </>
  );
}

export default Home;
