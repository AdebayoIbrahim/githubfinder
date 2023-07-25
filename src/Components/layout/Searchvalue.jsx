import React, { useContext } from "react";
import GithubContext from "../../Context/github/githubContext";
import { Box, Typography } from "@mui/material";
function Searchvalue() {
  const { result } = useContext(GithubContext);
  return (
    result !== null && (
      <Box pl={4} pb={1} sx={{ marginInline: "3%" }}>
        <Typography component="p" variant="body1" sx={{ color: "#0dff86" }}>
          {result}
        </Typography>
      </Box>
    )
  );
}

export default Searchvalue;
