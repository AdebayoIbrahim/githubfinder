import React, { createContext, useReducer } from "react";
import GithubReducer from "./githubReducers";

const GithubContext = createContext();

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repo: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
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
        }}
      >
        {children}
      </GithubContext.Provider>
    </React.Fragment>
  );
};

export default GithubContext;
