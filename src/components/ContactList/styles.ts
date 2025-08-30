import styled from 'styled-components'
import colors from '../../styles/colors'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 40px 0 40px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    margin: 40px 100px 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin: 40px 25px 40px;
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background: ${colors.fifthColor};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`

export const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 16px;
    margin-bottom: 4px;
    color: ${colors.secondColor};
  }

  span {
    font-size: 14px;
    color: #555;
  }

  .email {
    @media (max-width: ${breakpoints.cellPhone}) {
      font-size: 11px;
    }
  }
`

export const Category = styled.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${colors.thirdColor};
  font-weight: bold;
`

export const Buttons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: ${breakpoints.cellPhone}) {
    display: flex;
    flex-direction: column;
  }

  button {
    background: ${colors.thirdColor};
    opacity: 0.8;
    border: none;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  .editButton {
    background: ${colors.secondColor};
  }
`
