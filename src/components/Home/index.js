import React, { useEffect } from 'react'
import { HomeContainer } from './styles'
import AppBar from '../AppBar'
import Menu from '../Menu'
import Main from '../Main'
import { Redirect } from 'react-router-dom'
import { Types } from '../../store/ducks/nav'
import { connect } from 'react-redux'

function Home(props) {

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token){
      return  <Redirect to="/" />
    }
  })

  function menu() {
    props.dispatch({ type: Types.TOGGLE_MENU })
  }
  
  return (
    <HomeContainer>
      <AppBar menu={menu}/>
      {props.nav && <Menu/>}
      <Main/>
    </HomeContainer>
  )
}

const mapStateToProps = state => ({
  nav: state.nav.showMenu
});

export default connect(mapStateToProps, null)(Home);
