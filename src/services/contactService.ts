import { Contact } from '../models/Contact'
import contacts from './contactList.json'

export const getContacts = (): Contact[] => {
  return contacts
}
