import React from "react";
// import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import UserResults from "../Components/Users/userResults";
import UserSearch from "../Components/Users/userSearch";
function Home() {
  return (
    <>
      {/* {search component} */}
      <Helmet>
        <title>Github Finder</title>
      </Helmet>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
