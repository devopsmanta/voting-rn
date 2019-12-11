export const fetchVotes = promise => {
  return {
    type: "FETCH_VOTES",
    payload: promise
  }
}
