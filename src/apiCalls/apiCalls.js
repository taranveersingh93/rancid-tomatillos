const getData = (data) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${data}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} error`)
      } else {
        return response.json()
      }
    })
}

export { getData }