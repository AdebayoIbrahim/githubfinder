import React, { createContext, useReducer } from "react";
import GithubReducer from "./githubReducers";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repo: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //get specific user
  const getUser = async (login) => {
    Startload();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: "FETCH_USER",
      payload: data,
    });
  };
  //get specific user repositories

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
  //set alert state
  const setAlert = (msg) => {
    dispatch({
      type: "CALL_ALERT",
      payload: { msg },
    });

    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 2000);
  };

  return (
    <React.Fragment>
      <GithubContext.Provider
        value={{
          ...state,
          dispatch,
          Startload,
          clearUsers,
          setAlert,
          getUser,
        }}
      >
        {children}
      </GithubContext.Provider>
    </React.Fragment>
  );
};

export default GithubContext;
