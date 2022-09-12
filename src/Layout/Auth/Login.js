import React from 'react'
import { CoverLeft, FormSignIn } from '../../Components/Auth'
import './style.css'

const LoginLayout = () => {
    return (
        <div className='layoutAuth'>
            <CoverLeft />
            <FormSignIn />
        </div>
    )
}

export default LoginLayout