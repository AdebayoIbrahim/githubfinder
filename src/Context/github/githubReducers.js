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
    case "NET_ERR":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_USER":
      return {
        ...state,
        user: action.payload,
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
    case "FETCH_USER_REPOS":
      return {
        ...state,
        repo: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default GithubReducer;
