import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch]=useState('')
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetConversation()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search){
      return
    }
   const conversation =conversations.find((conversation)=>
    conversation.username.toLowerCase().includes( search.toLowerCase()))
   if(conversation){
    setSelectedConversation(conversation)
    setSearch('')
   }
   else{
    toast.error("No User Found with this name") 
   }
  }
  return (
    <form
     className='flex items-center gap-2'
     onSubmit={handleSubmit}
     >
        <input
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         type="text"
         placeholder='Search...'
         className="input input-bordered rounded-full"
         />
         <button type='submit'
         className='btn btn-circle bg-sky-500 text-white text-xl'
         >
            <IoSearchSharp/>
         </button>
    </form>
  )
}

export default SearchInput