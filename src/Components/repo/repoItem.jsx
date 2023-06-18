import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Button, Badge } from "@mui/material";
import { RepoBlock } from "../shared/Card";
import { FaEye, FaStar, FaUtensils, FaBug } from "react-icons/fa";

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
          startIcon={
            <LinkIcon sx={{ fill: "#11bbb8", transform: "rotate(-40deg)" }} />
          }
          component="a"
          variant="h1"
          mb={1}
          href={html_url}
          sx={{ textTransform: "lowercase" }}
        >
          {name}
        </Button>
        <Typography component="p" variant="caption" ml={2}>
          {description}
        </Typography>
        <Stack direction="row" pt={1.2}>
          <Box ml={2}>
            <Badge
              badgeContent={watchers_count}
              sx={{
                "& .MuiBadge-badge": {
                  minWidth: "20px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  color: "#d2e509",
                  background: "#4d094d",
                },
              }}
            >
              <FaEye style={{ fill: "#d2e509" }} size={18} />
            </Badge>
          </Box>
          <Box ml={2}>
            <Badge
              badgeContent={stargazers_count}
              sx={{
                "& .MuiBadge-badge": {
                  minWidth: "20px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  color: "#24e524",
                  background: "#4d094d",
                },
              }}
            >
              <FaStar style={{ fill: "#24e524" }} size={18} />
            </Badge>
          </Box>
          <Box ml={2}>
            <Badge
              badgeContent={open_issues}
              sx={{
                "& .MuiBadge-badge": {
                  minWidth: "20px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  color: "red",
                  background: "#4d094d",
                },
              }}
            >
              <FaBug style={{ fill: "red" }} size={18} />
            </Badge>
          </Box>
          <Box ml={2}>
            <Badge
              badgeContent={forks}
              sx={{
                "& .MuiBadge-badge": {
                  minWidth: "20px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  color: "#61d0ed",
                  background: "#4d094d",
                },
              }}
            >
              <FaUtensils style={{ fill: "#61d0ed" }} size={18} />
            </Badge>
          </Box>
        </Stack>
      </RepoBlock>
    </React.Fragment>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
