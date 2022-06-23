import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { Singin } from "../../pages/Signin"
import { Signup } from "../../pages/Signup"
import { Home } from "../../pages/Home"

export function AnimatedRoutes(){
  const location = useLocation()

  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/signin' element={<Singin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}