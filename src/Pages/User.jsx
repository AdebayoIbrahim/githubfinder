import React, { useEffect, useContext } from "react";
import { FaCode, FaUsers, FaUserFriends, FaStore } from "react-icons/fa";
import GithubContext from "../Context/github/githubContext";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Grid, Typography, Badge, Stack } from "@mui/material";
import Spinner from "../Components/layout/spinner";
import { Paper } from "../Components/shared/Card";
import RepoList from "../Components/repo/repoList";
import { getUserAndRepo } from "../Context/github/githubActions";
const User = () => {
  const { user, loading, repo, dispatch } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({
      type: "LOADING",
    });
    async function fetchUser() {
      const result = await getUserAndRepo(params.login);
      dispatch({
        type: "FETCH_USER_AND_REPO",
        payload: result,
      });
    }

    fetchUser();
  }, [dispatch, params.login]);

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
  const moreData = [
    { cont: followers, val: "followers", icon: FaUsers },
    { cont: following, val: "following", icon: FaUserFriends },
    { cont: public_repos, val: "repo", icon: FaCode },
    { cont: public_gists, val: "public gist", icon: FaStore },
  ];
  return loading ? (
    <Spinner />
  ) : (
    <Box
      ml={{ sm: 5, xs: 2, }}
      mr={{ sm: 4, xs: 2, }}
      pl={{ xs: 1, sm: 3 }}
    >
      <Box mb={1}>
        <Button component={Link} to="/">
          Previous
        </Button>
      </Box>
      <Grid container mb={5} spacing={{ md: 6, xs: 0 }}>
        <Grid item>
          <Box
            sx={{
              position: "relative",
              marginInline: { xs: "auto", sm: "auto" },
            }}
          >
            <figure>
              <img
                src={avatar_url}
                alt="avatar"
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
          <Box width="100%">
            <Stack direction="row" alignItems="center" gap={{ xs: 6, sm: 7 }}>
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
            <Box pt={2} pl={{ xs: 2, sm: 2 }} sx={{ width: "100%" }}>
              <Grid container spacing={0}>
                {location && (
                  <Grid item xl={2} lg={4} md={4} sm={6} xs={12}>
                    <Paper>
                      <Box p={2}>
                        <Typography
                          sx={{ color: "rgb(225 225 225 / .7)" }}
                          variant="body2"
                        >
                          location
                        </Typography>
                        <Typography
                          mt={1}
                          component="a"
                          href={`https://www.google.ng/maps/place/${location}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {location}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                )}
                {blog && (
                  <Grid item xl={2} lg={4} md={4} sm={6} xs={12}>
                    <Paper>
                      <Box p={2}>
                        <Typography
                          sx={{
                            color: "rgb(225 225 225 / .7)",
                          }}
                          variant="body2"
                        >
                          Website
                        </Typography>
                        <Typography
                          mt={1}
                          component="a"
                          href={`${blog}`}
                          target="_blank"
                          rel="noreferrer"
                          sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                        >
                          {blog}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                )}
                {twitter_username && (
                  <Grid item xl={2} lg={4} md={4} sm={6} xs={12}>
                    <Paper>
                      <Box p={2}>
                        <Typography
                          sx={{ color: "rgb(225 225 225 / .75)" }}
                          variant="body2"
                        >
                          Twitter
                        </Typography>
                        <Typography
                          mt={1}
                          component="a"
                          href={`https://twitter.com/${twitter_username}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {twitter_username}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box pt={1}>
        <Grid container spacing={0}>
          {moreData.map((datas, indx) => {
            return (
              <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={indx}>
                <Paper>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box p={2}>
                      <Typography
                        sx={{ color: "rgb(225 225 225 / .75)" }}
                        variant="body2"
                      >
                        {datas.val}
                      </Typography>
                      <Typography
                        mt={1}
                        component="div"
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {datas.cont}
                      </Typography>
                    </Box>
                    <Box pr={3}>
                      {<datas.icon size={30} className="icon" />}
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <RepoList repos={repo} />
    </Box>
  );
};

export default User;
