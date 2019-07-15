import styled from 'styled-components'
import img from '../../../assets/img/cadastro.png'

export const RegisterContainer = styled.div`
    background: url(${img}) no-repeat center;
    background-size: cover;
    height: 100vh;
`
export const RegisterBox = styled.div`
    width:280px;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    color: #FFF;
`

export const RegisterTitle = styled.h1`
    font-size: 40px;
    border-bottom: 6px solid #526dff;
    margin-bottom: 50px;
    padding: 13px 0;
`

export const TextBox = styled.div`
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    border-bottom: 1px solid #526dff;
`

export const Input = styled.input.attrs( props => ({
    type: props.type,
    placeholder: props.placeholder,
    value: props.value
}))`
    border: none;
    outline: none;
    background: none;
    color: #FFF;
    font-size: 18px;
    width: 80%;
    float: left;
    margin: 0 10px;
`
export const Icone = styled.i`
    float: left;
    text-align: center;
`
export const InputButton = styled.input.attrs( props => ({
    type: props.type,
    value: props.value
}))`
    width: 100%;
    background: none;
    border: 2px solid #526dff;
    color: #FFF;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    margin: 12px 0;
`
export const ButtonBack = styled.button`
    width: 100%;
    background: none;
    border: 2px solid #526dff;
    color: #FFF;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    margin: 12px 0;
`
