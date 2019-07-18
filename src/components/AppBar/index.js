import React, { useState } from 'react'
import { Bar, Container, TituloMenu, Icone, LeftContent,IconeLeft } from './styles'
import MaterialIcon from 'material-icons-react'
import Settings from '../Settings'

function AppBar() {

    const [ modal, modalStatus ] = useState(false)
    
    return (
        <Bar>
            <Container>
                <LeftContent>
                    <IconeLeft>
                        <MaterialIcon 
                            icon="arrow_back" 
                            size={30} 
                            color='#a5b5fe'/>
                    </IconeLeft>
                    <TituloMenu>Support Box</TituloMenu>
                </LeftContent>
                <Icone>
                    <MaterialIcon 
                    icon="account_circle" 
                    size={30} 
                    color='#a5b5fe'/>
                    <button onClick={() => modalStatus(!modal)}>
                        <MaterialIcon 
                        icon="settings" 
                        size={25} 
                        color='#a5b5fe'/>
                    </button>
                </Icone>
                <Settings modal={modal}/>
            </Container>
        </Bar>
    )
}

export default AppBar