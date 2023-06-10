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
    case "CLEAR_USERS":
      return {
        ...state,
        users: action.data,
      };
    default:
      return state;
  }
};

export default GithubReducer;
