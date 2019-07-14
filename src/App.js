import React from 'react'
import {AppGrid} from './styles'
import AppBar from './components/AppBar'
import Menu from './components/Menu'
import Main from './components/Main'

function App() {
  return (
    <AppGrid>
      <AppBar/>
      <Menu/>
      <Main/>
    </AppGrid>
  )
}

export default App;
