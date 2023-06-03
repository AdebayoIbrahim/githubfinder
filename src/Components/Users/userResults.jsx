import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../layout/spinner";
// import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import UserItem from "./userItem";
const UserResults = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    // if (!response.ok) {
    //   navigate("/error");
    // }
    const result = await response.json();
    setUsers(result);
    setLoading(false);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Box sx={{ marginInline: "3%" }}>
      <Grid
        container
        spacing={6}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {users.map((item, index) => {
          return <UserItem key={index} users={item} />;
        })}
      </Grid>
    </Box>
  );
};

export default UserResults;
