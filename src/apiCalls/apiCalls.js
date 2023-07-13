const getData = (data) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${data}`)
    .then(response => {
      if (response.status === 500) {
        console.log('there is an error in fetch: apicalls.js')
        return 'serverError'
      }
      if (response.status === 200) {
        console.log('there is no error in fetch: apicalls.js')
        return response.json()
        
      }
    })
}

export { getData }