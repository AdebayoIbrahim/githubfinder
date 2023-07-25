import React, { createContext, useReducer } from "react";
import GithubReducer from "./githubReducers";

const GithubContext = createContext();

export const GithubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    result: null,
    repo: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
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

  const inputResult = (username) => {
    dispatch({
      type: "USERNAME",
      payload: username,
    });
  };

  return (
    <React.Fragment>
      <GithubContext.Provider
        value={{
          ...state,
          dispatch,
          setAlert,
          inputResult,
        }}
      >
        {children}
      </GithubContext.Provider>
    </React.Fragment>
  );
};

export default GithubContext;
