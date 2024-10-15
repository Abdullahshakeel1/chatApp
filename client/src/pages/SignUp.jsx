import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckBox from '../component/GenderCheckBox';
import useSignUp from '../hooks/useSignUp';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    
  
  const { signup, loading } = useSignUp();

  const handleCheckBoxChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-200'>
        <h1 className='font-semibold text-3xl text-center text-slate-700'>
          Sign-Up to <span className='text-[#25d366]'>Chat Application</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              value={formData.username}
              type='text'
              className='w-full input input-bordered h-10'
              placeholder='Enter Username'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
              type='email'
              className='w-full input input-bordered h-10'
              placeholder='example@email.com'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              value={formData.password}
              type='password'
              className='w-full input input-bordered h-10'
              placeholder='Enter Password'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              value={formData.confirmPassword}
              type='password'
              className='w-full input input-bordered h-10'
              placeholder='Confirm Password'
            />
          </div>
          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={formData.gender}
          />

          <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
            <button
              className='btn btn-block btn-sm mt-2 bg-[#25d366] hover:bg-[#128c7e] font-bold text-white'
              disabled={loading}
            >
              {loading ? (<span className='loading loading-spinner'></span>)
              :("sign Up")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
