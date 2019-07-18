import React, {useState} from 'react'
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
import { connect } from 'react-redux'
import { Creators } from '../../../store/ducks/register'

function RegisterForm(props) {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirPassword, setConfirPassword ] = useState('')

    function cadastrar(){
        if(password === confirPassword){
            props.dispatch(Creators.register(name, email, password, cpf))
        }else{
            alert('Confirar sua senha!')
        }
    }

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
                    <Input 
                    type='text' 
                    placeholder='Nome'
                    onChange={ e => setName(e.target.value)}
                    />
                </TextBox>
                <TextBox>
                    <Icone>
                        <MaterialIcon 
                        icon="mail" 
                        size={26} 
                        color='#c1c1c1'/>
                    </Icone>
                    <Input 
                    type='email' 
                    placeholder='E-mail'
                    onChange={e => setEmail(e.target.value)}
                    />
                </TextBox>
                <TextBox>
                    <Icone>
                        <MaterialIcon
                            icon="fingerprint"
                            size={26}
                            color='#c1c1c1'
                        />
                    </Icone>
                    <Input 
                    type='text' 
                    placeholder='CPF'
                    onChange={e => setCpf(e.target.value)}
                    />
                </TextBox>
                <TextBox>
                    <Icone>
                        <MaterialIcon 
                        icon="lock" 
                        size={26} 
                        color='#c1c1c1'/>
                    </Icone>
                    <Input 
                    type='password' 
                    placeholder='Senha'
                    onChange={e => setPassword(e.target.value)}
                    />
                </TextBox>
                <TextBox>
                    <Icone>
                        <MaterialIcon
                            icon='lock'
                            size={26}
                            color='#c1c1c1'/>
                    </Icone>
                    <Input 
                    type='password' 
                    placeholder='Confirmar Senha'
                    onChange={e => setConfirPassword(e.target.value)}
                    />
                </TextBox>
                <InputButton type='button' value='Cadastrar' onClick={cadastrar}/>
                <Link to='/'>
                    <ButtonBack>Cancelar</ButtonBack>
                </Link>
            </RegisterBox>
        </RegisterContainer>
    )
}

const mapStateToProps = state => ({
    register: state.register.data
});

export default connect(mapStateToProps, null)(RegisterForm)
