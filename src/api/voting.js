const fetchVotes = page => {
  return new Promise((resolve, reject) => {
    fetch("http://jsonplaceholder.typicode.com/photos?_limit=8&_page=" + page)
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson)
      })
      .catch(err => reject(err.response))
  })
}

export default {
  fetchVotes
}
