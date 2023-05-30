import React from "react";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";
function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <Typography component="h1" color="white" sx={{ fontSize: "2rem" }}>
          Github Finder
        </Typography>
        <Typography component="p" variant="span">
          A React App That Uses Github Rest Api To Find Github Users
        </Typography>
        <Typography component="p" variant="span" color="grey" mt={2}>
          Version:{" "}
          <Typography component="span" variant="caption">
            1.0.0
          </Typography>
        </Typography>
        <Typography component="p" variant="span" color="grey">
          Originally By:{" "}
          <Typography component="span" variant="caption">
            <a href="http://www.traversymedia.com">Brad Traversy</a>
          </Typography>
        </Typography>
      </Helmet>
    </div>
  );
}

export default About;
