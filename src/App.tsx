import { BrowserRouter } from 'react-router-dom'
import { AnimatedRoutes } from './components/AnimatedRoutes'
import { AnimationContextProvider } from './Contexts/animationContext'
import { AuthContextProvider } from './Contexts/authContext'

export function App(){
  return(
    <AnimationContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </AnimationContextProvider>
  )
}