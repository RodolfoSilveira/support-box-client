import React from 'react'
import { Drawer, Container, Navegacao, LisItens, Item, Icone, BoxItem } from './styles'
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'

function Menu() {

    return (
        <Drawer>
            <Container className='container'>
                <Navegacao>
                    <LisItens>
                        <BoxItem>
                            <Link to='/home'>
                                <Item>
                                    <Icone>
                                        <MaterialIcon
                                        icon="home"
                                        size={25}
                                        color='#c1c1c1'/>
                                    </Icone>
                                    Home
                                </Item>
                            </Link>
                        </BoxItem>

                        <BoxItem>
                            <Link to='/home/tasks'>
                                <Item>
                                    <Icone>
                                        <MaterialIcon
                                        icon="event_note"
                                        size={25}
                                        color='#c1c1c1'/>
                                    </Icone>
                                    Tarefas
                                </Item>
                            </Link>
                        </BoxItem>


                        <BoxItem>
                            <Link to='/home/client'>
                                <Item>
                                    <Icone>
                                        <MaterialIcon
                                        icon="how_to_reg"
                                        size={25}
                                        color='#c1c1c1'/>
                                    </Icone>
                                    Clientes
                                </Item>
                            </Link>
                        </BoxItem>


                        <BoxItem>
                            <Link to='/home/employee'>
                                <Item>
                                    <Icone>
                                        <MaterialIcon
                                        icon="group"
                                        size={25}
                                        color='#c1c1c1'/>
                                    </Icone>
                                    Funcionários
                                </Item>
                            </Link>
                        </BoxItem>

                    </LisItens>
                </Navegacao>
            </Container>
        </Drawer>
    )
}

export default Menu
