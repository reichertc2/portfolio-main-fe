import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import MainPage from '../components/MainPage'
import Landing from '../components/Landing'

export default function Home() {
  
  const [entered,setEntered] = useState(false)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Main</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {entered ?  <MainPage/> : <Landing entered={entered} setEntered={setEntered}/> }
      


    </div>
  )
}
