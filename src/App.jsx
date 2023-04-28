import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'
import Header from './pages/Header'
import AddPerson from './pages/AddPerson'
import BirthdayList from './pages/BirthdayList'
import SharedLayout from './pages/SharedLayout'

const App = () => {
const [user, setUser] = useState(() => {
  const savedata = JSON.parse(localStorage.getItem('users'))
  return savedata
})


const addPerson = (person) => {
  setUser([...user, {id: uuidv4(), ...person}])
}

const deletePerson = (id) => {
  const newPerson = user.filter((person) => person.id !== id)
  setUser(newPerson)
}

useEffect(() => {
  localStorage.setItem('users', JSON.stringify(user))
}, [user])

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<BirthdayList user={user} deletePerson={deletePerson}/>} />
          <Route path='/addperson' element={<AddPerson addPerson={addPerson} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App