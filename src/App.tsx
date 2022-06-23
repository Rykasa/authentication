import { BrowserRouter } from 'react-router-dom'
import { AnimatedRoutes } from './components/AnimatedRoutes'
import { AnimationContextProvider } from './Contexts/animationContext'

export function App(){
  return(
    <AnimationContextProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AnimationContextProvider>
  )
}