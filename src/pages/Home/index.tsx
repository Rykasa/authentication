import { useAuth } from "../../hooks/useAuth"
import homeImg from '../../assets/homeImage.svg'
import * as C from './styles'
import { useNavigate } from "react-router-dom"

export function Home(){
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout(){
    logout()
    navigate('/signin')
  }

  return(
    <C.Section>
      <C.Main>
        <C.Button
          type="button"
          onClick={handleLogout}
        >Log out</C.Button>
        <C.MainCenter>
          <C.Greetings>
            <C.Title>Hello <span>{user?.name.split(' ', 1)}</span>,</C.Title>
            <C.Text>Thank you for signin up!</C.Text>
          </C.Greetings>
          <C.Image src={homeImg} alt="girl holding heart illustration" />
        </C.MainCenter>
      </C.Main>
    </C.Section>
  )
}