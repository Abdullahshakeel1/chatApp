import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import { apiUrl } from "../common/SummaryApi"

const useGetMessage = () => {
    const [loading ,setloading]=useState(false)
    const {messages,setMessages , selectedConversation} = useConversation()
useEffect(()=>{
    const getMessages =async()=>{
        try {
            setloading(true)
            const res = await fetch(`${apiUrl}/api/message/${selectedConversation._id}`)
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            setMessages(data)
            
        } catch (error) {
            toast.error(error.message)
            
        }
        finally{
            setloading(false)
        }
    } 
    if(selectedConversation._id){
        getMessages()
    }
},[selectedConversation._id,setMessages])

return {messages ,loading}

}

export default useGetMessage