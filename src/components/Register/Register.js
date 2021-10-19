import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Register.css'

const Register = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div className="container  pt-5">
            <div className="mt-5 pt-5">
                <div className="box-shadow py-5">
                    <h2>Medilab</h2>
                    <form action="">
                        <input type="text" required className="form-control border-radius-change w-50 m-auto" id="exampleFormControlInput1" placeholder="Name"></input><br />
                        <input type="email" required className="form-control border-radius-change w-50 m-auto" id="exampleFormControlInput1" placeholder="Email"></input><br />
                        <input type="password" required className="form-control border-radius-change w-50 m-auto" id="exampleFormControlInput1" placeholder="Password"></input>
                        <input className="sign-in-btn mt-3 mb-2" type="submit" value="Register" />
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <button onClick={signInUsingGoogle} className="sign-in-btn"><i class="fab fa-google"></i> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;