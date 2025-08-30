import { useDispatch, useSelector } from 'react-redux'
import { HeaderContainer, SearchInput } from './styles'
import { RootState } from '../../store'
import { setSearchTerm } from '../../store/contactsSlice'

interface HeaderProps {
  onAddContact: () => void
}

export const Header = ({ onAddContact }: HeaderProps) => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state: RootState) => state.contacts.searchTerm)

  return (
    <HeaderContainer>
      <h1>Lista de contatos</h1>
      <SearchInput
        type="text"
        placeholder="Buscar contato..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <button onClick={onAddContact}>Adicionar Contato</button>
    </HeaderContainer>
  )
}
