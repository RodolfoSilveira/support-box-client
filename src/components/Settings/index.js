import React from 'react'
import { Wrapper, Container, Button } from './styles'
import { connect } from 'react-redux'
import { Creators } from '../../store/ducks/logout'

function Settings(props) {

    function sair() {
        props.dispatch(Creators.logout())
    }

    return(
        <Wrapper modal={props.modal}>
            <Container>
                <Button onClick={sair}>Sair</Button>
            </Container>
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    logout: state.logout
});

export default connect(mapStateToProps, null)(Settings)