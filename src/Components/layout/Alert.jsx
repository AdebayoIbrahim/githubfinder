import React, { useContext } from "react";
import GithubContext from "../../Context/github/githubContext";
import { Box, Typography } from "@mui/material";

function Alert() {
  const { alert } = useContext(GithubContext);
  return (
    alert != null && (
      <Box pb={2} pl={4} sx={{ marginInline: "3%" }}>
        <Typography component="p">{alert.msg}</Typography>
      </Box>
    )
  );
}

export default Alert;
