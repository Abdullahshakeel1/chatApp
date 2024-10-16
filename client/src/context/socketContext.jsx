import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuthcontext } from './AutContext'
import { io } from 'socket.io-client'
import { apiUrl } from '../common/SummaryApi'

export const socketContext = createContext()
export const useSocketContext= ()=>{
    return useContext(socketContext)
}
export const SocketContextProvider =({children})=>{
    const [socket, setSocket]=useState(null)
    const [onlineUsers, setOnlineUsers]=useState([])
    const {authUser}=useAuthcontext()
    useEffect(() => {
        if (authUser) {
            const socket = io(apiUrl, {
                query: { userId: authUser._id }
            });
            setSocket(socket);
    
            socket.on("getOnlineUser", (users) => {
                console.log("Online Users Received:", users); // Log to debug
                setOnlineUsers(users);
            });
    
            return () => {
                socket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);
    
    
  return(
    <socketContext.Provider value={{socket, onlineUsers}}>
      {children}
    </socketContext.Provider>
  )
}
export default socketContext
