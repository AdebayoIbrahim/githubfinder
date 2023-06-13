import React, { useEffect, useContext } from "react";
import GithubContext from "../Context/github/githubContext";
import { useParams } from "react-router-dom";
const User = () => {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();
  console.log(user);
  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
};

export default User;
