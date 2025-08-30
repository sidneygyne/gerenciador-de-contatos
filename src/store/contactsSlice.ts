import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../models/Contact'
import { getContacts } from '../services/contactService'

type ContactsState = {
  list: Contact[]
}

const initialState: ContactsState = {
  list: getContacts()
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.list.push(action.payload)
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.list.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) state.list[index] = action.payload
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((c) => c.id !== action.payload)
    }
  }
})

export const { addContact, editContact, removeContact } = contactsSlice.actions
export default contactsSlice.reducer
