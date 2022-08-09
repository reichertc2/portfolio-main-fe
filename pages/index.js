import { useState } from 'react'
import MainPage from '../components/MainPage'
import Landing from '../components/Landing'

export default function Home() {
  
  const [entered,setEntered] = useState(false)

  function handleEntry(){
    console.log('handleEntry: ')
    setEntered(true)
  }
  
  return (
    <div >
     

      {entered ?  <MainPage/> : <Landing handleEntry={handleEntry}/> }
      


    </div>
  )
}
