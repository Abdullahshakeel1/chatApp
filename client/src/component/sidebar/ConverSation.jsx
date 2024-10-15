import React from 'react'
import SingleConversation from './SingleConversation'
import useGetConversation from '../../hooks/useGetConversation'

const ConverSation = () => {
  const {loading, conversations }=useGetConversation()
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, index)=>(
        <SingleConversation
         key={conversation._id}
         conversation={conversation}
         lastindex={index === conversation.length - 1}        />

      ))}
      {loading?(
        <span className='loading loading-spinner'></span>
      ):null}

    </div>
  )
}

export default ConverSation