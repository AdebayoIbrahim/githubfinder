import React, { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate()
  const fetchData = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    // if (!response.ok) {
    //   navigate("/error");
    // }
    const result = await response.json();
    setUsers(result);
    setLoading(false);
  };

  return (
    <React.Fragment>
      <GithubContext.Provider value={{ users, loading, fetchData }}>
        {children}
      </GithubContext.Provider>
      ;
    </React.Fragment>
  );
};

export default GithubContext;
