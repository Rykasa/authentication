import { BrowserRouter } from 'react-router-dom'
import { AnimatedRoutes } from './components/AnimatedRoutes'

export function App(){
  return(
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}