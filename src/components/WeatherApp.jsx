import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'
import Loading from './Loading'
import WeatherMainInfo from './WeatherMainInfo';
import styles from '../styles/weatherApp.module.css'

const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  console.log(styles)

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

      setTimeout(()=>{
        setWeather(resp)
      }, 1500)
          
    } catch (error) {console.log(error)}
  }

  const handleChangeCity = ( city ) => {
    setWeather(null);
    loadInfo(city);
  }

  return ( 
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity}/>
      { weather ? 
        <WeatherMainInfo weather={weather}/> 
        : 
        <Loading />
      }
      
    </div>
  )
}

export default WeatherApp