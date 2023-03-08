import React, { useState } from 'react'
import styles from '../styles/weatherForm.module.css'

const WeatherForm = ( {onChangeCity} ) => {
  
  const [city, setCity] = useState('');

  const onHandleInput = (e) => {
    setCity(e.target.value)
  }

  const onHandleSubmit= (e) => {
    e.preventDefault();
    if(city.length === 0) return;
    onChangeCity(city)
    setCity('')
  }

  return (
    <form onSubmit={onHandleSubmit} className={styles.container}>
      <input className={styles.input} type="text" onChange={onHandleInput} value={city}/>
    </form>
  )
}

export default WeatherForm;
