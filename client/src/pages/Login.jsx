import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail]=useState("")
    const [password, setPassword] = useState("")
    const {login,loading}=useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }
    

  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className=" w-full p-6 rounded-lg shadow-md bg-gray-200">
    <h1 className='font-semibold text-3xl text-center text-slate-700'>login to 
    <span className="text-[#25d366]"> Chat Application</span>
    
    </h1>
    <form onSubmit={handleSubmit}> 
        <div>
            <label 
            className="label p-2">
                <span
                    className='text-base label-text '
                >
                    Email
                </span>
            </label>
            <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className='w-full input input-bordered h-10'
                    placeholder='Enter Email '
            />
        </div>
        <div>
            <label 
            className="label p-2">
                <span
                    className='text-base label-text '
                >
                    Password
                </span>
            </label>
            <input 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    className='w-full input input-bordered h-10'
                    placeholder='Enter  Password '
            />
        </div>
        <Link to={'/signup'} className='text-sm hover:underline hover:text-[#128c7e] mt-2 inline-block'>
        {"don't "} have an account?
        </Link>
        <div>
            <button               
            className='btn btn-block btn-sm mt-2 bg-[#25d366] hover:bg-[#128c7e] font-bold text-white'
            disabled={loading}>
                
                {loading?(
                    <span className='loading loading-spinner'></span>
                ):
                "Login"
            }
            </button>
        </div>
    </form>
</div>
    </div>
  ) 
}

export default Login