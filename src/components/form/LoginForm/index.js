import React from 'react'
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

function LoginForm() {

    return (
        <LoginBox>
            <LoginTitle>Login</LoginTitle>
            <TextBox>
                <Icone>
                <MaterialIcon icon="account_circle" size={26} color='#c1c1c1'/>
                </Icone>
                <Input type='email' placeholder='E-mail'/>
            </TextBox>
            <TextBox>
                <Icone>
                <MaterialIcon icon="lock" size={26} color='#c1c1c1'/>
                </Icone>
                <Input type='password' placeholder='Senha'/>
            </TextBox>
                <Link to='/home'>
                    <InputButton type='button' value='Entrar'/>
                </Link>
                <Link to='/register'>
                    <ButtonRegister>Cadastre-se</ButtonRegister>
                </Link>
        </LoginBox>
    )
}

export default LoginForm