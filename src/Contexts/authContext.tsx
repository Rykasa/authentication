import { createContext, ReactNode, useEffect, useState } from "react";

interface User{
  name: string;
  email: string;
  password: string;
}

interface AuthContextData{
  user: User | null;
  error: string;
  signed: boolean;
  showError: (message: string) => void
  signup: (name: string, email: string, password: string) => string | undefined
  signin: (email: string, password: string) => string | undefined
  logout: () => void
}

interface AuthContextProviderProps{
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({children}: AuthContextProviderProps){
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState('')

  useEffect(() =>{
    const userToken = localStorage.getItem('user_login_token')
    const usersStorage = localStorage.getItem('registered_users')

    if(userToken && usersStorage){
      const hasUser: [User] = JSON.parse(usersStorage).filter((user: User) => {
        return user.email === JSON.parse(userToken).email
      })

      if(hasUser){
        setUser(hasUser[0])
      }
    }
  }, [])

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

  function signin(email: string, password: string){
    const storage = localStorage.getItem('registered_users')
    if(typeof storage === 'string'){
      const usersStorage = JSON.parse(storage)

      const hasUser: [User] = usersStorage?.filter((user: User) => user.email === email )

      if(hasUser?.length){
        if(hasUser[0].email === email && hasUser[0].password === password){
          const token = Math.random().toString(36).substring(2)
          localStorage.setItem('user_login_token', JSON.stringify({ email, token }))
          setUser({name: hasUser[0].name, email, password})
          return;
        }else{
          return "Email ou senha incorretos"
        }
      }else{
        return 'usuário não cadastrado'
      }
    }else{
      return "Usuário não cadastrado"
    }
  }

  function logout(){
    setUser(null)
    localStorage.removeItem('user_login_token')
  }

  return(
    <AuthContext.Provider value={{
      user,
      error,
      signed: !!user,
      showError,
      signup,
      signin,
      logout
    }}> 
      { children }
    </AuthContext.Provider>
  )
}