import { BrowserRouter, Route } from 'react-router-dom'
import { AnimatedRoutes } from './components/AnimatedRoutes'
import { AnimationContextProvider } from './Contexts/animationContext'
import { AuthContextProvider } from './Contexts/authContext'

export function App(){
  return(
    <AuthContextProvider>
      <AnimationContextProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </AnimationContextProvider>
    </AuthContextProvider>
  )
}