import React from "react";
import spinner from "../assetes/Double-Ring-spinner.gif";
import { Box, Avatar } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ marginInline: "auto" }}>
      <Avatar src={spinner} sx={{ width: "100px", height: "100px" }} />
    </Box>
  );
};

export default Spinner;
