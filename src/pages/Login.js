import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('');
    const { logIn, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                console.log(user);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleGoogle = () => {
        logInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-semibold">Please, Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <p className='text-error ml-1'><small>{error}</small></p>
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover">Create Account?</Link>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <button  onClick={handleGoogle} className="btn btn-primary"><FaGoogle /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;