import { Link } from 'react-router-dom'
import * as C from './styles'
import { Button } from '../../components/Button'
import { useAnimationContext } from '../../hooks/useAnimationContext'


export function Signup(){
  const { isAnimationRunning, startSignupAnimationOnClick, exit } = useAnimationContext()

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
                <C.Form>
                  <C.Label htmlFor="name">
                    Name
                    <C.Input type="text" placeholder="Enter your name" name="name" />
                  </C.Label>
                  <C.Label htmlFor="email">
                    Email
                    <C.Input type="email" placeholder="Enter your email" name="email" />
                  </C.Label>
                  <C.Label htmlFor="password">
                    Password
                    <C.Input type="text" placeholder="Enter your password" name="password" />
                  </C.Label>
                  <C.Label htmlFor="password-confirm">
                    Confirm Password
                    <C.Input type="text" placeholder="Enter your password" name="password-confirm" />
                  </C.Label>
                  <C.ButtonWrap>
                    <Button>Sign up</Button>
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