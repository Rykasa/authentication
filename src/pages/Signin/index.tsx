import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import * as C from './styles'

export function Singin(){
  const [isAnimationRunning, SetIsAnimationRunning] = useState(false)
  return(
    <C.Section>
      <C.Background
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%', transition: { duration: 1 } }}
        transition={{ duration:  1, delay: 1}}
      >
        <C.Main>
          <C.MainCenter>
            <C.FormWrap>
              <C.Heading>Welcome Back!</C.Heading>
              <C.Form>
                <C.Label htmlFor="email">
                  Email
                  <C.Input type="email" placeholder="Enter your email" name="email" />
                </C.Label>
                <C.Label htmlFor="password">
                  Password
                  <C.Input type="password" name="password" placeholder="Password" autoComplete='on' />
                </C.Label>
                <C.ButtonWrap>
                  <Button>Log in</Button>
                </C.ButtonWrap>
                <C.Text>
                  Don't have an account? 
                  <Link to="/signup" className="signup-link">Sign up</Link>
                </C.Text>
              </C.Form>
            </C.FormWrap>
          </C.MainCenter>
        </C.Main>
      </C.Background>
    </C.Section>
  )
}