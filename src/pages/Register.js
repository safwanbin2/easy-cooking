import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            setError('Password did not match')
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
            navigate('/')
        })
        .catch(error=> {
            console.error(error)
            setError(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-semibold">Please, Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='confirm' required className="input input-bordered" />
                        </div>
                        <p className='text-error ml-1'><small>{error}</small></p>
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;