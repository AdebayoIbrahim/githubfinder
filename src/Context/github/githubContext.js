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

  const searchUsers = async (value) => {
    Startload();
    const params = new URLSearchParams({
      q: value,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: "FETCH_USERS",
      payload: items,
    });
  };

  //start loading on fetching data

  const Startload = () => {
    dispatch({
      type: "LOADING",
    });
  };
  //clearing data in states
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
      data: [],
    });
  };

  return (
    <React.Fragment>
      <GithubContext.Provider
        value={{
          users: state.users,
          loading: state.loading,
          searchUsers,
          clearUsers,
        }}
      >
        {children}
      </GithubContext.Provider>
      ;
    </React.Fragment>
  );
};

export default GithubContext;
