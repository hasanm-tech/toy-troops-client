import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='pass' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>

                        <p className='py-4'>New user go to <button className='btn btn-xs'><Link to='/register'>Register</Link></button></p>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Login;