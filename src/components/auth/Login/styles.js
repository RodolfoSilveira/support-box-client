import styled from 'styled-components'
import img from '../../../assets/img/login.jpg'

export const Auth = styled.div`
    display: grid;
    grid-template-areas: 'wallpaper login';
    grid-template-columns: 1fr 500px;
    grid-auto-rows: 1fr;
    height: 100vh; 
`
export const Wallpaper = styled.div`
    grid-area: wallpaper;
    background: url(${img}) no-repeat center;
    background-size: cover;
    height: 100%;
`

export const LoginArea = styled.div`
    grid-area: login;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
