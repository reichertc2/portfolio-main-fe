import { useState } from 'react'
import styles from '../styles/Home.module.css'
import MainPage from '../components/MainPage'
import Landing from '../components/Landing'

export default function Home() {
  
  const [entered,setEntered] = useState(false)

  function handleEntry(){
    console.log('handleEntry: ')
    setEntered(true)
  }
  
  return (
    <div className={styles.container}>
     

      {entered ?  <MainPage/> : <Landing handleEntry={handleEntry}/> }
      


    </div>
  )
}
