// import React from "react";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
//search users
export const searchUsers = async (value) => {
  const params = new URLSearchParams({
    q: value,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items } = await response.json();
  return items;
};

//get specific user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 400) {
    window.location.pathname = "./notfound";
  }

  const data = await response.json();

  return data;
};
//get user repo
export const getUserRepo = async (login) => {
  const params = new URLSearchParams({
    per_page: 10,
    sort: "created",
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();
  return data;
};
