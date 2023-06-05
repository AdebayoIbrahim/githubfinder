import React, { createContext, useReducer } from "react";
import GithubReducer from "./githubReducers";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchData = async () => {
    Startload();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const result = await response.json();

    dispatch({
      type: "FETCH_USERS",
      payload: result,
    });
  };

  //start loading on fetching data

  const Startload = () => {
    dispatch({
      type: "LOADING",
    });
  };

  return (
    <React.Fragment>
      <GithubContext.Provider
        value={{ users: state.users, loading: state.loading, fetchData }}
      >
        {children}
      </GithubContext.Provider>
      ;
    </React.Fragment>
  );
};

export default GithubContext;
