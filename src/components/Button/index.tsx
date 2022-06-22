import { ReactNode } from 'react'
import { ButtonComponent } from './styles'

interface ButtonProps{
  children: ReactNode
}

export function Button({ children }: ButtonProps){
  return(
    <ButtonComponent>
      {children}
    </ButtonComponent>
  )
}