import styled from 'styled-components'

export const Content = styled.div`
    grid-area: content;
    padding: 20px;
`
export const HomeTitle = styled.h1`
    font-weight: 400;
    color: #a7a6aa;
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
`
export const Container = styled.div`
    width: 100%;
    max-width: 1090px;
    margin: auto;
`
export const CardArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Card = styled.div`
    margin: 20px;
    background-color: #fff;
    height: 250px;
    width: 300px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px #e0e1e9;
`
export const CardTitle = styled.h2`
    font-size: 1.2em;
    color: #8e8e8e;
    font-weight: 400;
    margin: 20px;
`
export const CardValue = styled.p`
    margin: 30px 20px;
    font-size: 2.3em;
    color: #474747;
    font-weight: 400;
`