import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
 
const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value; 
        const pass = form.pass.value; 
        const photo = form.photo.value; 
        console.log(name,email,pass,photo)
        createUser(email,pass)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
     return (
        <section>
            <div className="hero min-h-screen bg-base-200 py-20">
                <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>
                    <div className="card-body">
                        <div className="form-control">

                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="enter your email" className="input input-bordered" />
                        </div>

                        <div className='form-control'>                            
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="enter your email" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='pass' placeholder="enter your password" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="enter your photo url " className="input input-bordered" />
                        </div>



                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>

                        <p className='py-4'>Already registers go to <button className='btn btn-xs'><Link to='/login'>Login</Link></button></p>
                        
                    </div>
                    </form>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Register;