import React from 'react'
import { Drawer, Container, Navegacao, LisItens, Item, Icone } from './styles'
import MaterialIcon from 'material-icons-react'

function Menu() {

    return (
        <Drawer>
            <Container>
                <Navegacao>
                    <LisItens>
                        <Item>
                            <Icone>
                                <MaterialIcon 
                                icon="home" 
                                size={25} 
                                color='#c1c1c1'/>
                            </Icone>
                            Home
                        </Item>
                        <Item>
                            <Icone>
                                <MaterialIcon 
                                icon="event_note" 
                                size={25} 
                                color='#c1c1c1'/>
                            </Icone>
                            Tarefas
                        </Item>
                    </LisItens>
                </Navegacao>
            </Container>
        </Drawer>
    )
}

export default Menu