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
        users: [],
      };
    case "NET_ERR":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_USER_AND_REPO":
      return {
        ...state,
        user: action.payload.user,
        repo: action.payload.repo,
        loading: false,
      };
    case "CALL_ALERT":
      return {
        ...state,
        alert: action.payload,
      };
    case "CLEAR_ALERT":
      return {
        ...state,
        alert: null,
      };

    default:
      return state;
  }
};

export default GithubReducer;
