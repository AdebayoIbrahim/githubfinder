import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography component="h1" color="white" sx={{ fontSize: "2.4rem" }}>
        Error 404!
      </Typography>
      <Typography component="p" variant="h6" color="white">
        The Page You Are Looking For Does Not Exist!
      </Typography>
      <Box pt={2}>
        <Link to="/">
          <Button
            startIcon={<HomeIcon />}
            variant="contained"
            sx={{ background: "green" }}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Notfound;
