import React, { useEffect, useRef } from 'react';
import SingleMessage from './SingleMessage';
import useGetMessage from '../../hooks/useGetMessage';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessage();
  const lastMessageRef = useRef(null);
  useListenMessages()

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Add delay to ensure the DOM is updated
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length === 0 && (
        <p className="text-center">Start the conversation by sending a message.</p>
      )}
      
      {loading && (
        <p className="text-center">Loading messages...</p>
      )}
      
      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div
          key={message?._id}
          ref={index === messages.length - 1 ? lastMessageRef : null} // Only attach ref to the last message
        >
          <SingleMessage message={message} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
