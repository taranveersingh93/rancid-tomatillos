const getData = (data) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${data}`)
    .then(response => {
      if (response.status === 500) {
        return 'serverError'
      }
      if (response.status === 200) {
        return response.json()
      }
    })
}

export { getData }