import React from 'react'
import { Navigate, Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuthcontext } from './context/AutContext'

const App = () => {
  const {authUser}=useAuthcontext()
  return (
<div className="p-4 h-screen flex items-center justify-center bg-[#25d366]">
     
<Routes>
<Route path='/' element={authUser?<Home/>:<Navigate to={"/login"}/>}/>
<Route path='/login' element={authUser? <Navigate to={'/'}/>:<Login/>}/>
<Route path='/signup'
 element={authUser? <Navigate to={'/'}/>:<SignUp/>}/>

</Routes>
<Toaster/>
</div>
 
  )
}

export default App