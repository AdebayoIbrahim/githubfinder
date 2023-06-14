import React, { useEffect, useContext } from "react";
import { FaCodepen, FaUsers, FaUserFriends, FaStore } from "react-icons/fa";
import GithubContext from "../Context/github/githubContext";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import Spinner from "../Components/layout/spinner";
import styled from "@emotion/styled";
import { Paper } from "../Components/shared/Card";

const User = () => {
  const { user, getUser, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  //Destructuring datas

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return loading ? (
    <Spinner />
  ) : (
    <Box ml={4} pl={6} sx={{}}>
      <Box mb={2}>
        <Button component={Link} to="/">
          Previous
        </Button>
      </Box>
      <Grid container mb={5} spacing={{ md: 6 }}>
        <Grid item>
          <Box sx={{ position: "relative" }}>
            <figure>
              <img
                src={avatar_url}
                alt="image-hero"
                style={{
                  height: "300px",
                  width: "100%",
                  borderRadius: "1em",
                  boxShadow:
                    "0px 2px 5px 3px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                }}
              />
            </figure>
            <Box
              sx={{
                color: "white",
                position: "absolute",
                bottom: "20px",
                left: "10px",
                paddingLeft: "20px",
              }}
            >
              <h2>{name}</h2>
              <p>{login}</p>
            </Box>
          </Box>
        </Grid>
        <Grid></Grid>
      </Grid>
    </Box>
  );
};

export default User;
