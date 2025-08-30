import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeContact } from '../../store/contactsSlice'
import { Contact } from '../../models/Contact'
import { List, ListItem, Info, Buttons, Photo, Category } from './styles'

interface ContactListProps {
  onEditContact: (contact: Contact) => void
  selectedCategory: string
}

const ContactList: React.FC<ContactListProps> = ({ onEditContact, selectedCategory }) => {
  const { list, searchTerm } = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const filteredAndSortedContacts = list
    .filter((contact) => {
      // Filtro por categoria
      const matchesCategory = selectedCategory === 'all' || contact.category === selectedCategory

      // Filtro por busca
      const matchesSearch =
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)

      return matchesCategory && matchesSearch
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  const handleRemove = (id: string) => {
    dispatch(removeContact(id))
  }

  return (
    <div className="container">
      <List>
        {filteredAndSortedContacts.map((contact: Contact) => (
          <ListItem key={contact.id}>
            <Photo src={contact.photo || 'https://via.placeholder.com/50'} alt={contact.name} />
            <Info>
              <strong>{contact.name}</strong>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
              {contact.category && <Category>{contact.category}</Category>}
            </Info>
            <Buttons>
              <button className="editButton" onClick={() => onEditContact(contact)}>
                Editar
              </button>
              <button onClick={() => handleRemove(contact.id)}>Remover</button>
            </Buttons>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default ContactList
