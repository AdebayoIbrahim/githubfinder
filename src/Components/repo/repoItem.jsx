import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack } from "@mui/material";
import { RepoBlock } from "../shared/Card";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <React.Fragment>
      <RepoBlock>
        <Typography component="h2" mb={1}>
          {name}
        </Typography>
      </RepoBlock>
    </React.Fragment>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
