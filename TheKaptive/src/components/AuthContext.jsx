import { useContext, useState } from "react";
import { createContext } from "react";

 
  const userRes={
    isAuth:false,
    token:"",
    name:""
  }
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
// eslint-disable-next-line react/prop-types
export const AuthContextProvider=({children})=>{
      const [isLoggedIn, setLoggedIn] = useState(userRes);
   
     


      console.log(isLoggedIn);
    
     
      const handleLogout = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          const res = await user.get("https://kaptive-e6qa.onrender.com/user/logout", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(res);
          setLoggedIn(userRes);
          localStorage.removeItem("accessToken");
        } catch (error) {
          console.log(error);
        }
      };
   
   
   
   
    return(
        <AuthContext.Provider value={{handleLogout,isLoggedIn,setLoggedIn}}>
             {children}
        </AuthContext.Provider>
    )
}
