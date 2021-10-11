import { useContext } from "react";
import { authContext } from "../context/AuthProver"
const useAuth=()=>{
    return useContext(authContext)
}
export default useAuth;