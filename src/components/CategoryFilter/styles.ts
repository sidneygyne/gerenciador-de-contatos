import styled from 'styled-components'
import colors from '../../styles/colors'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  display: flex;
  gap: 8px; // espaço entre os botões
  margin-bottom: 16px;
  justify-content: space-evenly;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`

export const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? `${colors.fourthColor}` : `${colors.firstColor}`)};
  color: ${colors.secondColor};
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;

  &:hover {
    background-color: ${(props) =>
      props.active ? `${colors.fourthColor}` : `${colors.thirdColor}`};
  }
`
