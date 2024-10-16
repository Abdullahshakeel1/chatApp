import React from 'react'
import { useAuthcontext } from '../../context/AutContext'
import useConversation from '../../zustand/useConversation'
import { formatTime } from '../../utils/formatTime'

const SingleMessage = ({ message }) => {
  const { authUser } = useAuthcontext()
  const { selectedConversation } = useConversation() // Corrected naming
  const messageFromMe = message.senderId === authUser._id
  const chatClassName = messageFromMe ? "chat-end" : "chat-start"
  const profilePic = messageFromMe ? authUser.profilepic : selectedConversation?.profilepic // Ensure this is correct
  const msgBgColor = messageFromMe ? "bg-green-500" : ""
  const formattedTime = formatTime(message.createdAt)

  // console.log(selectedConversation); // Debugging line to check the data

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="img" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${msgBgColor}`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950">
        {formattedTime}
      </div>
    </div>
  )
}

export default SingleMessage
    