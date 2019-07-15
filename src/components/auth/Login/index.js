import React from 'react'
import { Auth, Wallpaper, LoginArea } from './styles'
import LoginForm from '../../form/LoginForm'

function Login(){
    return (
        <Auth>
            <Wallpaper>
                
            </Wallpaper>
            <LoginArea>
                <LoginForm/>
            </LoginArea>
        </Auth>
    )
}

export default Login