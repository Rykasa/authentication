import { createContext, ReactNode, useState } from "react"

interface AnimationContextData{
  isAnimationRunning: boolean;
  exit: exitType
  startSigninAnimationOnClick: () => void;
  startSignupAnimationOnClick: () => void;
}

interface AnimationContextProviderProps{
  children: ReactNode;
}

type exitType = {
  x: string;
  transition: { 
    duration: number 
  }
}

export const AnimationContext = createContext({} as AnimationContextData)

export function AnimationContextProvider({children}: AnimationContextProviderProps){
  const [isAnimationRunning, setIsAnimationRunning] = useState(false)
  const [exit, setExit] = useState({ x: '', transition: { duration: 0 } })

  function startSigninAnimationOnClick(){
    setIsAnimationRunning(true)
    setExit({ x: '-100%', transition: { duration: 1 } })
  }

  function startSignupAnimationOnClick(){
    setIsAnimationRunning(true)
    setExit({ x: '100%', transition: { duration: 1 } })
  }

  return(
    <AnimationContext.Provider value={{
      isAnimationRunning,
      exit,
      startSigninAnimationOnClick,
      startSignupAnimationOnClick
    }}>
      {children}
    </AnimationContext.Provider>
  )
}