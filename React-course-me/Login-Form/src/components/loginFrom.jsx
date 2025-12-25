import React, { useState } from 'react';

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <div>
                <input
                    placeholder="Email"
                    className="login-input"
                />
            </div>
            <div>
                <input
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    className="login-input"
                />
                <button
                    className={showPassword ? 'off-button' : 'on-button'}
                    onClick={togglePassword}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            <button className="login-button">Login</button>
            <button className="login-button">Sign up</button>
        </>
    );
}

export default LoginForm;