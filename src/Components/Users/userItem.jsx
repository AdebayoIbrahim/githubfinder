import React from "react";
import { Grid, Stack, Box, Avatar, Typography } from "@mui/material";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
const UserItem = ({ users: { login, avatar_url } }) => {
  return (
    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
      <Card>
        <Stack direction="row" gap={3} alignItems="center">
          <Box>
            <Avatar src={avatar_url} width={15} height={15} />
          </Box>
          <Box>
            <Typography component="h2">{login}</Typography>
            <Typography
              component={Link}
              variant="caption"
              to={`/users/${login}`}
            >
              Visit User Profile
            </Typography>
          </Box>
        </Stack>
      </Card>
    </Grid>
  );
};

export default UserItem;
