import React, { useEffect } from 'react'
import MessagesInput from './MessagesInput'
import Messages from './Messages'
import useConversation from '../../zustand/useConversation'
import { TiMessages } from 'react-icons/ti'
import { useAuthcontext } from '../../context/AutContext'

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation()
useEffect(() =>{
  // cleanup funccation
  setSelectedConversation( null)
},[setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
    {!selectedConversation ?(<NoChatSelected/>):(
          <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
             <span className='label-text'>to:</span> 
             <span className='text-gray-900 font-bold'>
              {selectedConversation?.username}
             </span>
          </div>
          <Messages/>
          <MessagesInput />
      </>
    )}

    </div>
  )
}
const NoChatSelected=()=>{
  const {authUser}=useAuthcontext()
  return(
    <div className="flex justify-center items-center w-full h-full">
      <div
       className="px-4 text-center sm:text-lg ms:text-xl text-slate-800 font-semibold flex flex-col items-center gap-2">
           <p>Welcome {authUser?.username} </p>
   <p>select a chat to start messaging</p>
   <TiMessages className='text-3xl md:6xl text-center' /> 
        
        </div>

    </div>
  )
}

export default MessageContainer