import styled from 'styled-components'

export const Drawer = styled.div`
  grid-area: menu;
  height: 60px;
  background-color: #FFF;
  box-shadow: 3px 3px 3px #e0e1e9;
  color: #545454;
`
export const Container = styled.div`

`
export const Navegacao = styled.nav`
`

export const LisItens = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const BoxItem = styled.div`
  padding: 14px;
  border-left: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  box-shadow: 1px 1px 1px rgba(0,0,0,.1);

  a {
    color: #000;
  }

  a:hover {
    color: #3f51b5;
  }
`

export const Item = styled.li`
  list-style: none;
  padding: 0;
  /* margin-top: 10px; */
  float: left;
`

export const Icone = styled.i`
  position: relative;
  top: 5px;
  right: 5px;
`
