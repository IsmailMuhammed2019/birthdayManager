import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './pages/Header'
import AddPerson from './pages/AddPerson'
import BirthdayList from './pages/BirthdayList'

const App = () => {
const [user, setUser] = useState([])

const addPerson = (person) => {
  setUser([...user, {id: uuidv4(), ...person}])
}

const deletePerson = (id) => {
  const newPerson = user.filter((person) => person.id !== id)
  setUser(newPerson)
}
  return (
    <div>
      <Header />
      <div className="ui container">
        <AddPerson addPerson={addPerson} />
        <BirthdayList user={user} deletePerson={deletePerson}/>
      </div>
    </div>
  )
}

export default App