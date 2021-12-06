import React, { useState } from 'react';
import fire from '../../fire.js';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.error('Incorrect username or password');
            });
    }
    return (
        <div>    
        <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" style={{color: '#22223B'}}
                    onChange={({ target }) =>     
                        setEmail(target.value)}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password" style={{color: '#22223B'}}
                    onChange={({ target}) => 
                        setPassword(target.value)}
                    placeholder="Password"
                />
                <br />
                <button type="submit">
                    Sign in
                </button>
            </form>
        </div>
    )
};
export default Login