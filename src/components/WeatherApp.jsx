import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'

const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  useEffect( () => {
    loadInfo();
  }, []);

  useEffect( () => {
    document.title = `Weather || ${weather?.location.name ?? ""}`
  }, [weather]);

  const loadInfo = async( city = 'London') => {
    
    // const url = `${import.meta.env.VITE_REACT_APP_URL}&key=${import.meta.env.VITE_REACT_APP_KEY}&q=${city}`
    
    // console.log(url)
    
    try {
      const api_key = `f3bd62c0c12e41308fa05133230803`
      const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
      const fetchApi = await fetch(url);
  
      const resp =  await fetchApi.json();

      setWeather(resp)
    
      console.log(resp)
      
    } catch (error) {console.log(error)}
  }

  const handleChangeCity = ( city ) => {
    setWeather(null);
    console.log('Hola')
    loadInfo(city);
  }

  return ( 
    <div>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <div>{weather?.current.temp_c}</div>
    </div>
  )
}

export default WeatherApp