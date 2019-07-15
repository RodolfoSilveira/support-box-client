import React from 'react'
import { 
    LoginBox, 
    LoginTitle, 
    TextBox,
    Input,
    Icone,
    InputButton 
} from './styles'
import MaterialIcon from 'material-icons-react'

function LoginForm() {

    return (
        <LoginBox>
            <LoginTitle>Login</LoginTitle>
            <TextBox>
                <Icone>
                <MaterialIcon icon="account_circle" size={26} color='#c1c1c1'/>
                </Icone>
                <Input type='text' placeholder='E-mail'/>
            </TextBox>
            <TextBox>
                <Icone>
                <MaterialIcon icon="lock" size={26} color='#c1c1c1'/>
                </Icone>
                <Input type='password' placeholder='Senha'/>
            </TextBox>
                <InputButton type='button' value='Entrar'/>
        </LoginBox>
    )
}

export default LoginForm