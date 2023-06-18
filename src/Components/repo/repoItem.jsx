import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Button } from "@mui/material";
import { RepoBlock } from "../shared/Card";
// import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import LinkIcon from "@mui/icons-material/Link";
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
        <Button
          startIcon={<LinkIcon />}
          component="a"
          variant="h1"
          mb={1}
          href={html_url}
          sx={{ textTransform: "lowercase" }}
        >
          {name}
        </Button>
      </RepoBlock>
    </React.Fragment>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
