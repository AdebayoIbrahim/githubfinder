import React, { useEffect, useContext } from "react";
import { FaCodepen, FaUsers, FaUserFriends, FaStore } from "react-icons/fa";
import GithubContext from "../Context/github/githubContext";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Grid, Typography, Badge, Stack } from "@mui/material";
import Spinner from "../Components/layout/spinner";
import { Card } from "../Components/shared/Card";
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
  const arr = [
    { cont: location, val: "location" },
    { cont: blog, val: "blog" },
    { cont: twitter_username, val: "twitter" },
  ];
  return loading ? (
    <Spinner />
  ) : (
    <Box ml={{ xs: 0, sm: 4 }} pl={{ xs: 0, sm: 6 }}>
      <Box mb={2}>
        <Button component={Link} to="/">
          Previous
        </Button>
      </Box>
      <Grid container mb={5} spacing={{ md: 6, xs: 0 }}>
        <Grid item>
          <Box
            sx={{
              position: "relative",
              // left: { xs: "0%", sm: 0 },
              // top: { xs: "50%", sm: 0 },
              transform: { xs: "translateX(30%)", sm: "none" },
            }}
          >
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
        <Grid item lg={8}>
          <Box pl={3} width="100%">
            <Stack direction="row" alignItems="center" gap={{ xs: 6, sm: 10 }}>
              <h1>{name}</h1>

              <Badge
                badgeContent={type}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: 13,
                    height: 20,
                    minWidth: 20,
                    paddingLeft: "-10px",
                    background: "#106f15",
                  },
                }}
              ></Badge>
              {hireable && (
                <Box ml={1}>
                  <Badge
                    badgeContent="hireable"
                    sx={{
                      "& .MuiBadge-badge": {
                        fontSize: 13,
                        height: 20,
                        minWidth: 20,
                        background: "#86891a;",
                      },
                    }}
                  ></Badge>
                </Box>
              )}
            </Stack>
            <Box pt={1}>
              <Typography component="p" variant="body1">
                {bio}
              </Typography>
            </Box>
            <Box pt={2}>
              <Button
                variant="outlined"
                component={Link}
                to={html_url}
                target="_blank"
                rel="noreferrer"
                sx={{}}
              >
                Github Profile
              </Button>
            </Box>
            <Box pt={2} sx={{ width: "100%" }}>
              <Grid container spacing={0}>
                {arr.map((item) => {
                  return (
                    <Grid item xl={2} lg={4} md={4} sm={6} xs={12}>
                      <Card>
                        <Box p={2}>
                          <Typography variant="body2">{item.val}</Typography>
                          <Typography mt={1} component={Link}>
                            {item.cont}
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default User;
