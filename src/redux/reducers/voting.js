const initialState = {
  isFetching: false,
  votes: [],
  error: null,
  page: 1
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_VOTES_PENDING":
      return {
        ...state,
        isFetching: true
      }
    case "FETCH_VOTES_FULFILLED":
      return {
        ...state,
        isFetching: false,
        votes: [...state.votes, ...action.payload],
        page: state.page + 1
      }
    case "FETCH_VOTES_REJECTED":
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
