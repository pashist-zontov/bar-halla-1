import React from 'react';
import './LoginForm.css';

const Login = () => {
    return (
        <div className='wrapper'>
            <from action = "">
                <h1>LOGIN</h1>
                <div className = "input-box">
                    <input type="text"  placeholder= 'Username...' required/>
                </div>
                <div className = "input-box">
                    <input type="text"  placeholder= 'Email...' required/>
                </div>
                <div className = "input-box">
                    <input type="text"  placeholder= 'Password...' required/>
                </div>
                
            </from>
        </div>
    );
};

export default Login;