import React from 'react'
import { HomeGrid } from './styles'
import AppBar from '../AppBar'
import Menu from '../Menu'
import Main from '../Main'
import { Redirect } from 'react-router-dom'

function Home() {
  const token = localStorage.getItem('token')
  if(!token){
    return  <Redirect to="/" />
  }
  
  return (
    <HomeGrid>
      <AppBar/>
      <Menu/>
      <Main/>
    </HomeGrid>
  )
}

export default Home;
