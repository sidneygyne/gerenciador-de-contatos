import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/index'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        {/* <ContactForm /> */}
        <ContactList />
      </div>
    </Provider>
  )
}

export default App
