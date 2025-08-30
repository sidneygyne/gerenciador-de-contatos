import { styled } from 'styled-components'
import colors from '../../styles/colors'

export const ButtonContainer = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.fourthColor};
  color: ${colors.secondColor};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.firstColor};
    color: ${colors.fifthColor};
  }
`
