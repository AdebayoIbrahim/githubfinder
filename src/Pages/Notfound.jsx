import React from "react";
import { Box, Typography } from "@mui/material";

const Notfound = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography component="h1" color="white" sx={{ fontSize: "2.4rem" }}>
        Error 404!
      </Typography>
    </Box>
  );
};

export default Notfound;
