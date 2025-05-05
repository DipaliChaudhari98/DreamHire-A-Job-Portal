// import { jwtDecode } from "jwt-decode";
// import React, { JSX } from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";


// interface ProtectedRouteProps{
//     children:JSX.Element;
//     allowedRoles?:string[];
// }


// const ProtectedRoute:React.FC<ProtectedRouteProps>=({children,allowedRoles})=>{

//     const token=useSelector((state:any)=>state.jwt);
//     if(!token){
//         return <Navigate to="/login"/>
//     }
//     const decoded:any =jwtDecode(token);
//     if (allowedRoles && !allowedRoles.includes(decoded.applicantType)) {
//         return <Navigate to="/unauthorized" />;
//     }
    
//     return children;
// }

// export default ProtectedRoute;




import { stat } from "fs";
import { jwtDecode } from "jwt-decode";
import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    const token=useSelector((state:any)=>state.jwt);
const user=useSelector((state:any)=>state.user);
  if (!token) {
    return <Navigate to="/job-history" />;
  }

  try {
    const decoded: any = jwtDecode(token);
    const userRole = user?.accountType;
console.log("ROLE:",user.accountType);
    if (allowedRoles && !allowedRoles.includes(userRole)) {
      return <Navigate to="/unauthorized" />;
    }

    return children;
  } catch (e) {
    console.error("JWT decode failed", e);
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
