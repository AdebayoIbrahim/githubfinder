// import React from "react";
import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
//search users
const githubBase = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});
export const searchUsers = async (value) => {
  const params = new URLSearchParams({
    q: value,
  });
  const response = await githubBase.get(`/search/users?${params}`);

  return response.data.items;
};

//get specific user and repo
export const getUserAndRepo = async (login) => {
  const [user, repo] = await Promise.all([
    githubBase.get(`/users/${login}`),
    githubBase.get(`users/${login}/repos`),
  ]);
  return { user: user.data, repo: repo.data };
};
