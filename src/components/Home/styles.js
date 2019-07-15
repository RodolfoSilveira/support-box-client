import styled from 'styled-components'

export const HomeGrid = styled.div`
    display: grid;
    grid-template-areas: 'appbar appbar' 'menu content';
    grid-template-columns: 300px 1fr ;
    grid-template-rows: 60px 1fr;
    height: 100vh;
`
