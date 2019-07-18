import styled from 'styled-components'

export const Wrapper = styled.div`
    display: ${props => props.modal ? 'block' : 'none'};
    position: absolute;
    top: 55px;
    right: 110px;
    width: 200px;
    height: 100px;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .4);
`

export const Container = styled.div`
    width: 100%;
    max-width: 150px;
    margin: auto;
`

export const Button = styled.button`
    border-radius: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 20px;
    padding-left: 20px;
    margin: 20px;
    font-size: 12px;
    text-align: center;
`