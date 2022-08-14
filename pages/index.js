import { useState, useEffect } from 'react'
import MainPage from '../components/MainPage'
import Landing from '../components/Landing'

export default function Home() {

  const [entered, setEntered] = useState(false)
  const [profileMain, setProfileMain] = useState({})

  function handleEntry() {
    console.log('handleEntry: ')
    setEntered(true)
  }

  useEffect(() =>
    fetchUser())

  const fetchUser = async () => {
    const response = await fetch('/api/user')
    const data = await response.json()
    setProfileMain(data)
  }

  return (

    <div className='bg-sky-900 m-auto min-h-screen'>


      {entered ? <MainPage profileMain={profileMain} /> : <Landing handleEntry={handleEntry} />}



    </div>
  )
}
