import React from 'react'
import { Bar, Container, TituloMenu, Icone, LeftContent,IconeLeft } from './styles'
import MaterialIcon from 'material-icons-react'

function AppBar() {

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
                </Icone>
            </Container>
        </Bar>
    )
}

export default AppBar