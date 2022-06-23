import { useContext } from "react";
import { AuthContext } from "../Contexts/authContext";

export function useAuth(){
  return useContext(AuthContext)
}