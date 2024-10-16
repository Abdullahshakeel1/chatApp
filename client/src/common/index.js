//  export const apiUrl = "https://chat-app-omega-ebon.vercel.app";
//  export const apiUrl = "http://localhost:3000";
// const backendDomain = process.env.REACT_APP_BACKEND_URL;
const backendDomain  = "http://localhost:3000"
export const SummaryApi ={
    backend:{
        url:`${backendDomain}`,
    },
    getCoversations:{
        url:`${backendDomain}/api/users`,
    },
    getMessages:{
        url:`${backendDomain}/api/message`,
    },
    LOGIN:{
        url:`${backendDomain}/api/auth/login`,
    },
    LOGOUT:{
        url:`${backendDomain}api/auth/logout`,
    },
    sendMessage:{
        url:`${backendDomain}/api/message/send`,
    },
  
    signup:{
        url:`${backendDomain}/api/auth/signup`,
    }
}