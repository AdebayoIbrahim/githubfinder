import React from "react";
import { useEffect } from "react";
const UserResults = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const result = await response.json();
    console.log(result);
  };

  return <div>userResults</div>;
};

export default UserResults;
