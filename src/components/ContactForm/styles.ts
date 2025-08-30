import styled from 'styled-components'
import colors from '../../styles/colors'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px 20px 20px;
  background-color: ${colors.fifthColor};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const CloseButton = styled.button`
  font-size: 25px;
  border: none;
  display: flex;
  justify-content: flex-end;
  margin-left: 95%;
  background-color: ${colors.fifthColor};
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
