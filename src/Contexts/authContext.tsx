import { createContext, ReactNode, useEffect, useState } from "react";

interface User{
  name: string;
  email: string;
  password: string;
}

interface AuthContextData{
  user: User | null;
  error: string;
  showError: (message: string) => void
  signup: (name: string, email: string, password: string) => string | undefined
}

interface AuthContextProviderProps{
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({children}: AuthContextProviderProps){
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState('')

  function showError(message: string){
    setError(message)
  }

  function signup(name: string, email: string, password: string){
    const storage = localStorage.getItem('registered_users')
    if(typeof storage === 'string'){
      const usersStorage = JSON.parse(storage)
      const hasUser = usersStorage?.filter((user: User) => user.email === email )

      if(hasUser?.length){
        console.log(hasUser)
        return "Já tem uma conta com esse E-mail"
      }

      let newUser

      if(usersStorage){
        newUser = [...usersStorage, { name, email, password }]
        localStorage.setItem('registered_users', JSON.stringify(newUser))
      }else{
        newUser = [{ name, email, password }]
        localStorage.setItem('registered_users', JSON.stringify(newUser))
      }
      return
    }else{
      let newUser = [{ name, email, password }]
      localStorage.setItem('registered_users', JSON.stringify(newUser))
    }
  }

  return(
    <AuthContext.Provider value={{
      user,
      error,
      showError,
      signup,

    }}> 
      { children }
    </AuthContext.Provider>
  )
}