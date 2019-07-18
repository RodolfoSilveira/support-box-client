import React from 'react'
import { Wrapper, Container, Button } from './styles'
import { Link } from 'react-router-dom'

function Settings(props) {

    function sair(){
        localStorage.clear()
    }

    return(
        <Wrapper modal={props.modal}>
            <Container>
                <Link to='/'>
                    <Button onClick={sair}>Sair</Button>
                </Link>
            </Container>
        </Wrapper>
    )
}

export default Settings