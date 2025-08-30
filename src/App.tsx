import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import { Header } from './components/Header'
import { Contact } from './models/Contact'
import { GlobalStyle } from './styles'
import { CategoryFilter } from './components/CategoryFilter'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const handleAddContact = () => {
    setContactToEdit(null) // garantindo que será um novo
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleEditContact = (contact: Contact) => {
    setContactToEdit(contact)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setContactToEdit(null)
  }

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header onAddContact={handleAddContact} />
        {showForm && <ContactForm contactToEdit={contactToEdit} onFinish={handleCloseForm} />}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onChangeCategory={handleChangeCategory}
        />
        <ContactList selectedCategory={selectedCategory} onEditContact={handleEditContact} />
      </div>
    </Provider>
  )
}

export default App
