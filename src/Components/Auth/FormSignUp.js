import React from "react";
import { Link } from "react-router-dom";
import './auth.css'

const styleH1 = {
    paddingTop : '3%'
}

const formSignUp = () => {
    return (
        <>
            <div className="content">
                <img src="./image/Tickitz 1.png" alt="tickitz" />
                <div className="contentBox">
                    <div className = "header">
                        <h1 style={styleH1}>Sign Up</h1>
                        <p>Fill your additional details</p>
                    </div>
                    <div className="form">
                        <div className="first-name">
                            <span>First Name</span>
                            <input type="First Name" class="form-control" id="First Name" placeholder="Write your first name" />
                        </div>
            
                        <div className="last-name">
                            <span>Last Name</span>
                            <input type="Last Name" class="form-control" id="Last Name" placeholder="Write your last name" />
                        </div>
            
                        <div className="phone-number">
                            <span>Phone Number</span>
                            <input type="Phone Number" class="form-control" id="Phone Number" placeholder="Write your phone number" />
                        </div>
                            
                        <div className="email-form">
                            <span>Email</span>
                            <input type="Email" class="form-control" id="Email" placeholder="Write your email" />
                        </div>
                    
                        <div className="password-form">
                            <span>Password</span>
                            <input type="Password" className="form-control" id="Password" placeholder="Write your password" />
                        </div>
                    </div>
                    <div className="inputBtn-form">
                        <input type="submit" value="Sign Up" name="" />
                    </div>
                    <div className="inputSignIn">
                        <p>Already have account ? <Link to='/login'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default formSignUp;