//creating reducer function

const GithubReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
};

export default GithubReducer;
