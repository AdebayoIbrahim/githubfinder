import React from "react";
import { Grid } from "@mui/material";

const UserItem = ({ users }) => {
  return (
    <Grid item xs={5} sm={4} md={2}>
      {users.login}
    </Grid>
  );
};

export default UserItem;
