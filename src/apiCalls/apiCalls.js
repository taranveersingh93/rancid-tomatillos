const getData = (data) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${data}`)
    .then(response => response.json())
    
}

export { getData }