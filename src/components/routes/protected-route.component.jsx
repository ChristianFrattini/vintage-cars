import { useContext } from "react"
import { AdminContext } from "../../context/auth.context"
import { Navigate } from "react-router-dom"



const ProtectedRoute=({children})=>{
    const {user}=useContext(AdminContext)
    //console.log(user)
    if(!user){ //if there is no user redirect to login page
        //console.log('redirect to admin')
        return <Navigate to='/admin' replace/>
    }else{  //if there is a user logged in return the children of the context
        //console.log('return children')
        return children
    }
}

export default ProtectedRoute