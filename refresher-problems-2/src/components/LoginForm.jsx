import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newError = {};
        if(!email.includes('@')){
            newError.emailError = "Email should contain '@' symbol.";   
        }
        if(password.length < 6){
            newError.passwordError = "Password should be atleast contain 6 characters long.";
        }
        setError(newError);
    }
    return (
        <div>
            <h1>LoginForm</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button>Submit</button>
                </form>
            </div>
            {error.emailError && <p>{error.emailError}</p>}
            {error.passwordError && <p>{error.passwordError}</p>}
        </div>
    )
}

export default LoginForm
