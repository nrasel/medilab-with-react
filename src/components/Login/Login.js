import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Login.css'

const Login = () => {

    const { user, signInUsingGoogle, signInUser } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInUser(data.email, data.password)

    };
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }
    console.log(user)
    return (
        <div className="container  pt-5">
            <div className="mt-5 pt-5">
                <div className="box-shadow py-5">
                    <h2>Medilab</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Email" type="email" className="form-control border-radius-change w-50 m-auto mb-3" defaultValue="" {...register("email")} />


                        <input className="form-control border-radius-change w-50 m-auto mb-3" placeholder="Password" type="password" {...register("password", { required: true })} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="sign-in-btn mb-2" type="submit" />
                    </form>
                    <p>Don't have an account? <Link to="/register">Create Account</Link> </p>
                    <button onClick={handleGoogleSignIn} className="sign-in-btn"><i className="fab fa-google"></i> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;