import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";

const RepoList = ({ repos }) => {
  return (
    <Box ml={4} pt={3}>
      <Box pb={1}>
        <Typography component="h2">Top Repositories</Typography>
      </Box>
      <Box pt={2}>
        <Stack direction="column" gap={2}>
          {repos.map((repo, index) => {
            return <h2 key={index}>{repo.name}</h2>;
          })}
        </Stack>
      </Box>
    </Box>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
