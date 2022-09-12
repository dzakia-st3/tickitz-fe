import React from 'react'
import { CoverLeft, FormSignUp } from '../../Components/Auth'
import './style.css'

const LoginLayout = () => {
    return (
        <div className='layoutAuth'>
            <CoverLeft />
            <FormSignUp />
        </div>
    )
}

export default LoginLayout