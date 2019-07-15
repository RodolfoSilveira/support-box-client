import React from 'react'
import { HomeGrid } from './styles'
import AppBar from '../AppBar'
import Menu from '../Menu'
import Main from '../Main'

function Home() {
  return (
    <HomeGrid>
      <AppBar/>
      <Menu/>
      <Main/>
    </HomeGrid>
  )
}

export default Home;
