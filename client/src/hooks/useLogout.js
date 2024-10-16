import { useState } from "react"
import { useAuthcontext } from "../context/AutContext"
import toast from "react-hot-toast"
import { apiUrl } from "../common/SummaryApi"


const useLogout = () => {
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthcontext()
    const logout =async()=>{
        try {
            setLoading(true)
            const res =await fetch(`${apiUrl}api/auth/logout`,
            {    method :"GET",
                headers:{"content-Type": "application/json"}
            }
            )
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
             
            }
            localStorage.removeItem("user")
            setAuthUser(null)
            
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false)

        }
    }
    return {loading, logout}

}

export default useLogout