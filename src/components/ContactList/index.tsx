import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeContact } from '../../store/contactsSlice'
import { Contact } from '../../models/Contact'
import { List, ListItem, Info, Buttons, Photo, Category } from './styles'
import ContactForm from '../ContactForm'

interface ContactListProps {
  onEditContact: (contact: Contact) => void
}

const ContactList: React.FC<ContactListProps> = ({ onEditContact }) => {
  const { list, searchTerm } = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const filteredContacts = list
    .filter((c: Contact) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name))

  // Estado para armazenar o contato que será editado
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null)

  const handleRemove = (id: string) => {
    dispatch(removeContact(id))
  }

  return (
    <>
      <div className="container">
        <List>
          {filteredContacts.map((contact: Contact) => (
            <ListItem key={contact.id}>
              <Photo src={contact.photo || 'https://via.placeholder.com/50'} alt={contact.name} />
              <Info>
                <strong>{contact.name}</strong>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
                {contact.category && <Category>{contact.category}</Category>}
              </Info>
              <Buttons>
                <button onClick={() => onEditContact(contact)} className="editButton">
                  Editar
                </button>
                <button onClick={() => handleRemove(contact.id)}>Remover</button>
              </Buttons>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}

export default ContactList
