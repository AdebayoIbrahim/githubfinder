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

    if (!response.ok) {
      console.log(response.status);
      dispatch({
        type: "NET_ERR",
      });
      alert("NetWork Error! ) " + response.status);
    }

    const { items } = await response.json();

    dispatch({
      type: "FETCH_USERS",
      payload: items,
    });
  };

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
  const getUserRepo = async (login) => {
    Startload();
    const params = new URLSearchParams({
      per_page: 10,
      sort: "created",
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    dispatch({
      type: "FETCH_USER_REPOS",
      payload: data,
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
          users: state.users,
          loading: state.loading,
          alert: state.alert,
          user: state.user,
          repo: state.repo,
          searchUsers,
          getUserRepo,
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
