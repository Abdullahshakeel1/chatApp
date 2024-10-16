import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { apiUrl } from "../common/SummaryApi"

const useGetConversation = () => {
    const [loading, setLoading]=useState(false)
    const [conversations,setConversation]= useState([])
    useEffect(()=>{
        const getCoversations =async()=>{
            try {
                setLoading(true)
                const res = await fetch(`${apiUrl}/api/users`)
                const data = await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
                setConversation(data)
            } catch (error) {
                toast.error(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        getCoversations()
    },[])

    return {loading,conversations}
    
}

export default useGetConversation