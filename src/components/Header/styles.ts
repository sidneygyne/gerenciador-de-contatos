import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { breakpoints } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${colors.fifthColor};
  margin: 20px 0 30px;
  flex-wrap: wrap; // permite quebra para próxima linha
  gap: 15px; // espaço entre os itens quando quebra

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center; // centraliza os elementos
  }

  @media (max-width: 480px) {
    flex-direction: column; // empilha no mobile
    align-items: stretch; // inputs/botões ocupam largura total
    gap: 10px;
  }
`

export const HeaderLink = styled(Link)`
  font-size: 40px;
  font-weight: 800;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    text-align: center;
  }
`

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${colors.secondColor};
  border-radius: 8px;
  width: 300px;
  font-size: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 220px;
  }

  @media (max-width: ${breakpoints.cellPhone}) {
    width: 100%;
    font-size: 14px;
  }
`
