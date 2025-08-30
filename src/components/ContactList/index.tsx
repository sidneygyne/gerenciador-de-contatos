import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeContact } from '../../store/contactsSlice'
import { Contact } from '../../models/Contact'
import { List, ListItem, Info, Buttons, Photo, Category } from './styles'
import ContactForm from '../ContactForm'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.list)
  const dispatch = useDispatch()

  // Estado para armazenar o contato que será editado
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null)

  const handleRemove = (id: string) => {
    dispatch(removeContact(id))
  }

  const handleEdit = (contact: Contact) => {
    setContactToEdit(contact)
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Rola para o topo, onde está o formulário
  }

  const handleFinishEdit = () => {
    setContactToEdit(null) // Limpa o estado após a edição
  }

  return (
    <>
      <ContactForm contactToEdit={contactToEdit} onFinish={handleFinishEdit} />
      <div className="container">
        <List>
          {contacts.map((contact: Contact) => (
            <ListItem key={contact.id}>
              <Photo src={contact.photo || 'https://via.placeholder.com/50'} alt={contact.name} />
              <Info>
                <strong>{contact.name}</strong>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
                {contact.category && <Category>{contact.category}</Category>}
              </Info>
              <Buttons>
                <button onClick={() => handleEdit(contact)} className="editButton">
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
