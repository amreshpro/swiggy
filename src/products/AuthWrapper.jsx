import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthWrapper = ({children}) => {

const isAuth = useSelector((state)=>state.auth)



  return (
    <>
    {
isAuth ? children : <Navigate to="/login" replace={true} />

    }
    
    
    
    </>
  )
}
export default AuthWrapper