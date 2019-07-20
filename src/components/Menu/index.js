import React from 'react'
import { Drawer, Container, Navegacao, LisItens, Item, Icone, BoxItem } from './styles'
import MaterialIcon from 'material-icons-react'

function Menu() {

    return ( 
        <Drawer>
            <Container className='container'>
                <Navegacao>
                    <LisItens>
                        <BoxItem>
                            <Item>
                                <Icone>
                                    <MaterialIcon 
                                    icon="home" 
                                    size={25} 
                                    color='#c1c1c1'/>
                                </Icone>
                                Home
                            </Item>
                        </BoxItem>
                        <BoxItem>
                            <Item>
                                <Icone>
                                    <MaterialIcon 
                                    icon="event_note" 
                                    size={25} 
                                    color='#c1c1c1'/>
                                </Icone>
                                Tarefas
                            </Item>
                        </BoxItem>
                        <BoxItem>
                            <Item>
                                <Icone>
                                    <MaterialIcon 
                                    icon="how_to_reg" 
                                    size={25} 
                                    color='#c1c1c1'/>
                                </Icone>
                                Clientes
                            </Item>
                        </BoxItem>
                        <BoxItem>
                            <Item>
                                <Icone>
                                    <MaterialIcon 
                                    icon="group" 
                                    size={25} 
                                    color='#c1c1c1'/>
                                </Icone>
                                Funcionários
                            </Item>
                        </BoxItem>
                    </LisItens>
                </Navegacao>
            </Container>
        </Drawer>
    )
}

export default Menu