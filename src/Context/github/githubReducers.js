//creating reducer function

const GithubReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload, loading: false };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default GithubReducer;
