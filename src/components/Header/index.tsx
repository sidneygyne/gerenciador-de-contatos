import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setSearchTerm } from '../../store/contactsSlice'
import { Button } from '../Button'
import { Container, HeaderLink, SearchInput } from './styles'

interface HeaderProps {
  onAddContact: () => void
}

export const Header = ({ onAddContact }: HeaderProps) => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state: RootState) => state.contacts.searchTerm)

  return (
    <Container>
      <HeaderLink to="/">Lista de contatos</HeaderLink>
      <SearchInput
        type="text"
        placeholder="Buscar contato..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <Button onClick={onAddContact}>Adicionar Contato</Button>
    </Container>
  )
}
