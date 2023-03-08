const weatherApi = async() => {

  const api_key = `f3bd62c0c12e41308fa05133230803`
  const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=London`

  const fetchApi = await fetch(url);

  const resp =  await fetchApi.json();

  return resp

}

