import styled from 'styled-components'
import colors from '../../styles/colors'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${colors.fifthColor};
  margin: 20px 0 30px;
`

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${colors.secondColor};
  border-radius: 8px;
  width: 300px;
  font-size: 16px;
`
