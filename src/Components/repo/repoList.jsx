import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import RepoItem from "./repoItem";

const RepoList = ({ repos }) => {
  return (
    <Box pt={3}>
      <Box pt={1}>
        <Typography component="h1" fontWeight={600} fontSize="1.3rem">
          Top Repositories
        </Typography>
      </Box>
      <Box pt={1}>
        <Stack direction="column" gap={1}>
          {repos.map((repo, index) => {
            return <RepoItem repo={repo} key={index} />;
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
