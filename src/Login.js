import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './helpers/loginValidationHelper'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {  
    const navigate=useNavigate();

    const [email , setEmail] = useState(null);
    const [password , setPassword] = useState(null);

    const [errors, setErrors]=useState({})
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation({ email , password}));
        if( errors.email === "" && errors.password === "")
        {
            axios.post('http://localhost:8081/login', { email , password})
            .then(res => {
                if(res.data === "Success")
                {
                    navigate('./home')
                }else{
                    alert("No records existed");
                }
            })
            .catch(err => console.log(err));

        }
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-pimary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h2> Sign-in </h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong> Email </strong></label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={(e)=> setEmail(e.target.value)} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                
                    <div className='mb-3'>
                        <label htmlFor="password"><strong> Password </strong></label>
                        <input type="password" placeholder='Enter Password' name='password' onChange={(e)=> setPassword(e.target.value)} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                   
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Log in </button>
                    <p>Don't have an account?</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login