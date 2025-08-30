import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../../store/contactsSlice'
import { v4 as uuidv4 } from 'uuid'
import { Form, Input, Select, CloseButton } from './styles'
import { Contact } from '../../models/Contact'
import { Button } from '../Button'

type Props = {
  contactToEdit?: Contact | null
  onFinish?: () => void
}

const ContactForm: React.FC<Props> = ({ contactToEdit, onFinish }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [photo, setPhoto] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name || '')
      setEmail(contactToEdit.email || '')
      setPhone(contactToEdit.phone || '')
      setPhoto(contactToEdit.photo || '')
      setCategory(contactToEdit.category || '')
    }
  }, [contactToEdit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (contactToEdit) {
      dispatch(
        editContact({
          ...contactToEdit,
          name,
          email,
          phone,
          photo,
          category
        })
      )
    } else {
      dispatch(
        addContact({
          id: uuidv4(),
          name,
          email,
          phone,
          photo,
          category
        })
      )
    }

    setName('')
    setEmail('')
    setPhone('')
    setPhoto('')
    setCategory('')

    if (onFinish) onFinish()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <CloseButton onClick={onFinish}>x</CloseButton>
      <Input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="URL da Foto"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Selecione a categoria</option>
        <option value="amigo">Amigo</option>
        <option value="família">Família</option>
        <option value="trabalho">Trabalho</option>
        <option value="conhecido">Conhecido</option>
        <option value="vizinho">Vizinho</option>
        <option value="outros">Outros</option>
      </Select>
      <Button type="submit">{contactToEdit ? 'Salvar Alterações' : 'Adicionar Contato'}</Button>
    </Form>
  )
}

export default ContactForm
