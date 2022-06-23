import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { Signin } from "../../pages/Signin"
import { Signup } from "../../pages/Signup"
import { Home } from "../../pages/Home"
import { useAuth } from "../../hooks/useAuth"

interface PrivateProps{
  Item: React.ElementType
}

const Private: React.FC<PrivateProps> = ({ Item }) =>{
  const { signed } = useAuth()

  return signed ? <Item /> : <Signin />
}

export function AnimatedRoutes(){
  const location = useLocation()

  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Private Item={Home} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </AnimatePresence>
  )
}