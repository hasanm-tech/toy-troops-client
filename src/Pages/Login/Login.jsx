import React, { useContext, useState } from 'react';
import { Link, useLocation ,useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const {userSignIn,googleSignIn} = useContext(AuthContext)
    
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value; 
        const pass = form.pass.value; 
        console.log(email,pass)

        userSignIn(email,pass)

        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})

            setSuccess('user login successful')
            setError('')
            
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
            setSuccess('user login successful')
            setError('')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    } 


    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
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
                        <input type="password" name='pass' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>

                        <p className='py-4'>New user go to <button className='btn btn-xs'><Link to='/register'>Register</Link></button></p>

                        <div className='mb-10 text-center'>
                        <button onClick={handleGoogleSignIn} className='p-4 btn btn-outline text-white bg-[#db3c3c]'>Google Sign In</button>
                        </div>

                        <p className='font-bold text-[#ab3636]'>{error}</p>
                        <p className='font-bold text-[#56a35a]'>{success}</p>
                    </div>

                    
                    </form>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Login;