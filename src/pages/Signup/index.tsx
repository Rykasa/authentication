import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as C from './styles'
import { Button } from '../../components/Button'
import { useAnimationContext } from '../../hooks/useAnimationContext'
import { useAuth } from '../../hooks/useAuth'


export function Signup(){
  const { isAnimationRunning, startSignupAnimationOnClick, exit } = useAnimationContext()
  const { error, showError, signup } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
  }

  const handleSignup = () =>{
    if(!name || !email || !password || !passwordConfirmation){
      showError("Preencha todos os campos")
      return
    }else if(password !== passwordConfirmation){
      showError("As senhas não são iguais")
      return
    }

    const res = signup(name, email, password)
    
    if(res){
      console.log(res)
      showError(res)
      return
    }

    alert("Usuário cadastrado com sucesso!")
    showError('')
    navigate('/signin')
  }

  return(
      <C.Section>
        <C.Background 
          initial={ isAnimationRunning ? { x: '100%' } : '' }
          animate={ isAnimationRunning ? { x: '0%' } : '' }
          exit={ exit }
          transition={{ duration:  1, delay: 1}}
        >
          <C.Main>
            <C.MainCenter>
              <C.FormWrap>
                <C.Heading>Create your Account!</C.Heading>
                <C.Form onSubmit={handleSubmit}>
                  <C.Label htmlFor="name-field">
                    Name
                    <C.Input 
                      type="text" 
                      placeholder="Enter your name" 
                      name="name-field"
                      value={name}
                      onChange={e => setName(e.target.value)}

                    />
                  </C.Label>
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
                      placeholder="Enter your password" 
                      name="password-field" 
                      autoComplete='on'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </C.Label>
                  <C.Label htmlFor="password-confirm-field">
                    Confirm Password
                    <C.Input 
                      type="password" 
                      placeholder="Enter your password" 
                      name="password-confirm-field" 
                      autoComplete='on'
                      value={passwordConfirmation}
                      onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                  </C.Label>
                  <C.ErrorMessage>{error}</C.ErrorMessage>
                  <C.ButtonWrap>
                    <Button
                      type="submit"
                      onClick={handleSignup}
                      title={'Sign up'}
                    />
                  </C.ButtonWrap>
                  <C.Text>
                    Already have an account? 
                    <Link 
                      to='/signin' 
                      className="signin-link"
                      onClick={startSignupAnimationOnClick}
                    >Sign in</Link>
                  </C.Text>
                </C.Form>
              </C.FormWrap>
            </C.MainCenter>
          </C.Main>

        </C.Background>
      </C.Section>
  )
}