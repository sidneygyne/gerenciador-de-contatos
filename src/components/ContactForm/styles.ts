import styled from 'styled-components'
import colors from '../../styles/colors'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: ${colors.fifthColor};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid ${colors.thirdColor};
  border-radius: 5px;
  background-color: ${colors.fifthColor};
  font-size: 16px;
  &:focus {
    border-color: ${colors.thirdColor};
    outline: none;
  }
`

export const Select = styled.select`
  padding: 10px 15px;
  border: 1px solid ${colors.thirdColor};
  border-radius: 5px;
  font-size: 16px;
  background-color: ${colors.fifthColor};
  &:focus {
    border-color: ${colors.thirdColor};
    outline: none;
  }
`
