import React, { useContext } from "react";
import GithubContext from "../../Context/github/githubContext";
import { Box, Stack, Typography } from "@mui/material";
import { FaTimes } from "react-icons/fa";

function Alert() {
  const { alert } = useContext(GithubContext);
  return (
    alert != null && (
      <Box pb={1.5} pl={4} sx={{ marginInline: "3%" }}>
        <Stack direction="row" gap={1} alignItems="center">
          <FaTimes style={{ background: "#d63b0c", borderRadius: "50%" }} />
          <Typography component="p" variant="body2">
            {alert.msg}
          </Typography>
        </Stack>
      </Box>
    )
  );
}

export default Alert;
