import React, { useContext, useEffect } from "react";
import Spinner from "../layout/spinner";
import { Box, Grid } from "@mui/material";
import UserItem from "./userItem";
import GithubContext from "../../Context/github/githubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <Spinner />
  ) : (
    <Box sx={{ marginInline: "3%" }}>
      <Grid
        container
        spacing={5}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {users.map((item, index) => {
          return <UserItem key={index} users={item} />;
        })}
      </Grid>
    </Box>
  );
};

export default UserResults;
