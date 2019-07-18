import React, {useState} from 'react'
import { 
    LoginBox, 
    LoginTitle, 
    TextBox,
    Input,
    Icone,
    InputButton,
    ButtonRegister
} from './styles'
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Creators } from '../../../store/ducks/auth'

function LoginForm(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submit() {
        props.dispatch(Creators.authorize(email, password))
    }

    return (
        <LoginBox>
            <LoginTitle>Login</LoginTitle>
            <TextBox>
                <Icone>
                <MaterialIcon icon="account_circle" size={26} color='#c1c1c1'/>
                </Icone>
                <Input 
                type='email' 
                placeholder='E-mail' 
                onChange={e => setEmail(e.target.value)}/>
            </TextBox>
            <TextBox>
                <Icone>
                <MaterialIcon icon="lock" size={26} color='#c1c1c1'/>
                </Icone>
                <Input 
                type='password' 
                placeholder='Senha'
                onChange={e => setPassword(e.target.value)}
                />
            </TextBox>
                <InputButton type='button' value='Entrar' onClick={submit}/>
                <Link to='/register'>
                    <ButtonRegister>Cadastre-se</ButtonRegister>
                </Link>
        </LoginBox>
    )
}

const mapStateToProps = state => ({
    auth: state.auth.data
});

export default connect(mapStateToProps, null)(LoginForm)