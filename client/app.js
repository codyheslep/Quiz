import React from 'react'
import Header from './components/header'
import Navbar from './components/navbar'
import Routes from './routes'
import BottomBar from './components/bottombar'
import { Sticky } from 'semantic-ui-react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <Routes />
      <BottomBar />
    </div>
  )
}

export default App
