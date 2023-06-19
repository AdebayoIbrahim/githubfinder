// import React from "react";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (value) => {
  const params = new URLSearchParams({
    q: value,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  //   if (!response.ok) {
  //     console.log(response.status);
  //     dispatch({
  //       type: "NET_ERR",
  //     });
  //     alert("NetWork Error! ) " + response.status);
  //   }

  const { items } = await response.json();
  return items;
};
