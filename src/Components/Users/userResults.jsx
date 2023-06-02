import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../layout/spinner";
import { useNavigate } from "react-router-dom";
const UserResults = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    if (!response.ok) {
      navigate("/error");
    }
    const result = await response.json();
    setUsers(result);
    setLoading(false);
  };

  return loading ? (
    <Spinner />
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
