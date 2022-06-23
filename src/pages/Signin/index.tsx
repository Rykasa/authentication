import { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAnimationContext } from '../../hooks/useAnimationContext'
import { useAuth } from '../../hooks/useAuth'
import * as C from './styles'

export function Signin(){
  const { isAnimationRunning, startSigninAnimationOnClick, exit } = useAnimationContext()
  const { error, showError, signin } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
  }

  const handleSignin = async () =>{
    if(!email || !password){
        showError("Preencha todos os dados")
      return
    }

    const res = await signin(email, password)

    if(res){
      showError(res)
      return
    }

    navigate('/')
  }

  return(
    <C.Section>
      <C.Background
        initial={ isAnimationRunning ? { x: '-100%' } : '' }
        animate={ isAnimationRunning ? { x: '0%' } : ''}
        exit={ exit }
        transition={  { duration:  1, delay: 1} }
      >
        <C.Main>
          <C.MainCenter>
            <C.FormWrap>
              <C.Heading>Welcome Back!</C.Heading>
              <C.Form onSubmit={handleSubmit}>
                <C.Label htmlFor="email-field">
                  Email
                  <C.Input 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email-field" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </C.Label>
                <C.Label htmlFor="password-field">
                  Password
                  <C.Input 
                    type="password" 
                    name="password-field" 
                    placeholder="Password" 
                    autoComplete='on' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </C.Label>
                  <C.ErrorMessage>{error}</C.ErrorMessage>
                <C.ButtonWrap>
                  <Button
                    type="submit"
                    title="Log in"
                    onClick={handleSignin}
                  />
                </C.ButtonWrap>
                <C.Text>
                  Don't have an account? 
                    <Link 
                      to="/signup" 
                      className="signup-link"
                      onClick={startSigninAnimationOnClick}
                    >
                      Sign up</Link>
                </C.Text>
              </C.Form>
            </C.FormWrap>
          </C.MainCenter>
        </C.Main>
      </C.Background>
    </C.Section>
  )
}