import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthLogin } from "../../Redux/actions/Auth"
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './auth.css'

const FormSignIn = () => {
    const { data, error, loading, isLogin} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(AuthLogin(formLogin))
    }
    
    useEffect(() => {
        if(isLogin === true && data?.role === 'user') {
            Swal.fire({
                icon: 'success',
                title: '',
                text: 'Login Success',
            })
            navigate('/', {replace: true})
        } else if (isLogin === true && data?.role === 'admin') {
            Swal.fire({
                icon: 'success',
                title: '',
                text: 'Login Success',
            })
            navigate('/manage-movie', {replace: true})
        }
        else {
            navigate('/login', {replace: true})
        }
    }, [isLogin]) 

    return (
    <>
        <div className="contentBox">
            <div className = "header">
                <h1>Sign In</h1>
                <p>Sign in with your data that you entered during <br/> your registration</p>
            </div>
            <div className="form">
                <form onSubmit={handleLogin}>
                    <div className="email-form">
                        <span>Email</span>
                        <input type="Email" class="form-control" id="Email" placeholder="Write your email" onChange={(e) => setFormLogin((prevData) => ({
                        ...prevData,
                        email: e.target.value
                        }))} />
                    </div>
                        
                    <div className="password-form">
                        <span>Password</span>
                        <input type="Password" className="form-control" id="Password" placeholder="Write your password" onChange={(e) => setFormLogin((prevData) => ({
                        ...prevData,
                        password: e.target.value
                        }))}/>
                    </div>  
                    {loading ? (
                    <button className="btn btn-primary" disabled={true}>Loading..</button>
                    ):(
                    <button className="btn btn-primary">Sign In</button>
                    )}   
                </form>           
            </div>
            <div className="question">
                <div className="question1">
                    <p>Forgot your password?  <Link to='#'>Reset now</Link></p>
                </div>
                <div className="question2">
                    <p>Don’t have an account?  <Link to="/register">Sign Up</Link></p>
                </div>
            </div>
        </div>
    {/* <div className='form'>
        <form onSubmit={handleLogin}>
            <div className="email-form">
                <span>Email</span>
                <input type="Email" className="form-control" id="Email" placeholder="Write your email" onChange={(e) => setFormLogin((prevData) => ({
                ...prevData,
                email: e.target.value
                }))} />
            </div>
            <div className="password-form">
                <span>Password</span>
                <input type="Password" className="form-control" id="Password" placeholder="Write your password" onChange={(e) => setFormLogin((prevData) => ({
                ...prevData,
                password: e.target.value
                }))}/>
            </div>
            {loading ? (
                <button className="btn btn-primary" disabled={true}>Loading..</button>
                ):(
                <button className="btn btn-primary">Sign In</button>
            )} 
            {error && (
                <div>{error.message}</div>
            )}
            <div className="inputBtn-form">
                <input type="submit" value="Sign In" name="" onClick={handleLogin} />
            </div>
        </form>
        <div className="question">
            <div className="question1">
                <p>Forgot your password?<Link to='#'>Reset now</Link></p>
            </div>
            <div className="question2">
                <p>Don’t have an account?<Link to="/signUp">Sign Up</Link></p>
            </div>
        </div>
    </div> */}
    </>
    )
}

export default FormSignIn