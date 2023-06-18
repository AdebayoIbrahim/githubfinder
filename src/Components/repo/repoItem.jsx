import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Button, Badge } from "@mui/material";
import { RepoBlock } from "../shared/Card";
import { FaEye, FaInfo, FaStar, FaUtensils } from "react-icons/fa";
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
                  color: "#d2e509",
                  background: "#4d094d",
                  padding: "2px",
                },
              }}
            >
              <FaEye style={{ fill: "#d2e509" }} size={20} />
            </Badge>
          </Box>
          <Box ml={2}>
            <Badge
              badgeContent={stargazers_count}
              sx={{
                "& .MuiBadge-badge": {
                  color: "#24e524",
                  background: "#4d094d",
                  padding: "2px",
                },
              }}
            >
              <FaStar style={{ fill: "#24e524" }} size={20} />
            </Badge>
          </Box>
          <Box ml={2}>
            <Badge
              badgeContent={stargazers_count}
              sx={{
                "& .MuiBadge-badge": {
                  color: "red",
                  background: "#4d094d",
                  padding: "2px",
                },
              }}
            >
              <FaInfo style={{ fill: "red" }} size={20} />
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
