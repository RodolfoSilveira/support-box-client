import styled from 'styled-components'

export const Drawer = styled.div`
    grid-area: menu;
    background-color: #FFF;
    box-shadow: 2px 2px 2px #e0e1e9;
    color: #545454;
`
export const Container = styled.div`
    width: 100%;
    padding-top: 60px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Navegacao = styled.nav`
    width: 20%;
`

export const LisItens = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const Item = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;

    height: 40px;
    line-height: 40px;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icone = styled.div`
    padding-top: 5px;
    padding-right: 30px;
` 