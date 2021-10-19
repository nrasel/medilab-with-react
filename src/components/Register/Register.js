import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Register.css'

const Register = () => {
    const { signInUsingGoogle, user, signUpUser } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signUpUser(data.email, data.password, data.name)
    };


    return (
        <div className="container  pt-5">
            <div className="mt-5 pt-5">
                <div className="box-shadow py-5">
                    <h2>Medilab</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Name" className="form-control border-radius-change w-50 m-auto mb-3" defaultValue='' {...register("name")} />

                        <input placeholder="Email" className="form-control border-radius-change w-50 m-auto mb-3" type="email" defaultValue={user?.email} {...register("email")} />


                        <input className="form-control border-radius-change w-50 m-auto mb-2" placeholder="Password" type="password" {...register("password", { required: true })} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="sign-in-btn" type="submit" />
                    </form>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <button onClick={signInUsingGoogle} className="sign-in-btn"><i className="fab fa-google"></i> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;