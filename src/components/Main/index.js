import React from 'react'
import { 
    Content, 
    Container, 
    CardArea, 
    Card, 
    HomeTitle, 
    CardTitle,
    CardValue 
} from './styles'

function Main() {
    return (
        <Content>
            <Container>
                <HomeTitle>Dashboard</HomeTitle>
                <CardArea>
                    <Card>
                        <CardTitle>Clientes</CardTitle>
                        <CardValue>0</CardValue>
                    </Card>
                    <Card>
                        <CardTitle>Funcionários</CardTitle>
                        <CardValue>0</CardValue>
                    </Card>
                    <Card>
                        <CardTitle>Chamados</CardTitle>
                        <CardValue>0</CardValue>
                    </Card>
                </CardArea>
            </Container>
        </Content>
    )
}

export default Main