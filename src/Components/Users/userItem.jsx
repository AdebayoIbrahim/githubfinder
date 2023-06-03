import React from "react";
import { Grid } from "@mui/material";
import Card from "../shared/Card";

const UserItem = ({ users: { login, avatar_url } }) => {
  return (
    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
      <Card>{login}</Card>
    </Grid>
  );
};

export default UserItem;
