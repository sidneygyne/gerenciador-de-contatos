import { ButtonContainer } from './styles'

export type Props = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
}

export const Button = ({ children, onClick, type = 'button' }: Props) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}
