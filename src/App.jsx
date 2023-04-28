import { useState } from 'react'
import Header from './pages/Header'
import AddPerson from './pages/AddPerson'
import BirthdayList from './pages/BirthdayList'

const App = () => {
const [user, setUser] = useState('')

const addPerson = (person) => {
  setUser(person)
}



  return (
    <div>
      <Header />
      <div className="ui container">
        <AddPerson addPerson={addPerson} />
        <BirthdayList user={user} />
      </div>
    </div>
  )
}

export default App