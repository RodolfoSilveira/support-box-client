import React from 'react'
import { 
    RegisterContainer, 
    RegisterBox, 
    RegisterTitle,
    TextBox,
    Icone,
    Input,
    InputButton,
    ButtonBack
} from './styles'
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'


function RegisterForm() {

    return (
        <RegisterContainer>
            <RegisterBox>
                <RegisterTitle>Cadastrar</RegisterTitle>
                <TextBox>
                    <Icone>
                        <MaterialIcon
                            icon="person"
                            size={26}
                            color='#c1c1c1'
                        />
                    </Icone>
                    <Input type='text' placeholder='Nome'/>
                </TextBox>
                <TextBox>
                    <Icone>
                        <MaterialIcon 
                        icon="mail" 
                        size={26} 
                        color='#c1c1c1'/>
                    </Icone>
                    <Input type='email' placeholder='E-mail'/>
                </TextBox>
                <TextBox>
                    <Icone>
                        <MaterialIcon
                            icon="fingerprint"
                            size={26}
                            color='#c1c1c1'
                        />
                    </Icone>
                    <Input type='text' placeholder='CPF'/>
                </TextBox>
                <TextBox>
                    <Icone>
                        <MaterialIcon 
                        icon="lock" 
                        size={26} 
                        color='#c1c1c1'/>
                    </Icone>
                    <Input type='password' placeholder='Senha'/>
                </TextBox>
                <TextBox>
                    <Icone>
                        <MaterialIcon
                            icon='lock'
                            size={26}
                            color='#c1c1c1'/>
                    </Icone>
                    <Input type='password' placeholder='Confirmar Senha'/>
                </TextBox>
                <Link to='/home'>
                    <InputButton type='button' value='Cadastrar'/>
                </Link>
                <Link to='/'>
                    <ButtonBack>Cancelar</ButtonBack>
                </Link>
            </RegisterBox>
        </RegisterContainer>
    )
}

export default RegisterForm
