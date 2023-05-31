import React from "react";
import { useEffect, useState } from "react";
const UserResults = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
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
    setUsers(result);
    setLoading(false);
  };

  return loading ? (
    <h2>Loading....</h2>
  ) : (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      {users.map((item) => {
        return <p>{item.login}</p>;
      })}
    </div>
  );
};

export default UserResults;
