import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  const {loading, logout}=useLogout()
  return (
    <div className='mt-auto'>
      {!loading? <BiLogOut 
        onClick={logout}
        className='text-red-500 cursor-pointer w-6 h-6'/>
 :(<span className='loading loading-spinner' ></span>)     
      }
       
    </div>
  )
}

export default LogoutButton