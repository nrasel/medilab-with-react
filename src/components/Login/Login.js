import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Login.css'

const Login = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div className="container  pt-5">
            <div className="mt-5 pt-5">
                <div className="box-shadow py-5">
                    <h2>Medilab</h2>
                    <form action="">
                        <input type="email" required className="form-control border-radius-change w-50 m-auto" placeholder="Email"></input><br />
                        <input type="password" required className="form-control border-radius-change w-50 m-auto" placeholder="Password"></input>
                        <input className="sign-in-btn mt-3 mb-2" type="submit" value="Login" />
                    </form>
                    <p>Don't have an account? <Link to="/register">Create Account</Link> </p>
                    <button className="sign-in-btn"><i class="fab fa-google"></i> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;