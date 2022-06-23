import { ButtonHTMLAttributes } from 'react'
import { ButtonComponent } from './styles'

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>){
  const { title } = props
  return(
    <ButtonComponent {...props}>
      {title}
    </ButtonComponent>
  )
}