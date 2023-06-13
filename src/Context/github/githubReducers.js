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
    case "FETCH_USER":
      return {
        ...state,
        user: action.payload,
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
