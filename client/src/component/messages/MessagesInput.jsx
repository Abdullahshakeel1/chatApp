import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'

const MessagesInput = () => {
  const [message , setMessage]=useState('')
  const {loading, sendMessage}=useSendMessage()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    if(!message){
      return
    }
    // console.log(message)
    await sendMessage(message)
    setMessage('')

  }
  return (
       <form
         className='px-4 my-3 '
         onSubmit={handleSubmit}>
            <div className="w-full relative">
                  <input type="text" 
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white" 
                    placeholder="Enter your text" />
                  <button
                    type='submit'
                    className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'
                  >
                    {loading ? <div className='spinner-border text-white'></div> : <BsSend />}
                  </button>
            </div>
       </form>


  )
}

export default MessagesInput